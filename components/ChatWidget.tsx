import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from "@google/genai";
import { useLanguage } from '../contexts/LanguageContext';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { language } = useLanguage();
  
  // Set initial greeting based on default language (Chinese preferred)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: '您好！我是福建大学AI招生助手。有关严复书院、招生政策或校园生活的问题，请随时问我。' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session on mount
  useEffect(() => {
    try {
      chatSessionRef.current = createChatSession();
    } catch (e) {
      console.error("Failed to init chat session", e);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const streamResult = await sendMessageStream(chatSessionRef.current, userMsg.text);
      
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullText += text;
          setMessages(prev => prev.map(msg => 
            msg.id === botMsgId ? { ...msg, text: fullText } : msg
          ));
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: language === 'zh' ? '抱歉，我现在无法连接到服务器，请稍后再试。' : 'Sorry, I cannot connect to the server right now.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden pointer-events-auto transition-all animate-in slide-in-from-bottom-10 fade-in duration-300 flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-fju-secondary to-fju-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-fju-accent" />
              <div>
                <h3 className="font-bold text-sm">FJU Smart Assistant</h3>
                <p className="text-xs text-gray-300">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 h-80 md:h-96">
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'self-end bg-fju-secondary text-white rounded-tr-sm'
                      : 'self-start bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="self-start bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-fju-secondary" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={language === 'zh' ? "询问招生、专业..." : "Ask about admissions..."}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fju-secondary/20 focus:border-fju-secondary transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-fju-secondary hover:bg-fju-primary text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-fju-secondary hover:bg-fju-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute right-full mr-3 bg-white text-fju-primary px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {language === 'zh' ? '咨询AI助手' : 'Ask AI'}
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
