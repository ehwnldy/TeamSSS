"use client";
import Link from "next/link";

// pages/signin.tsx

import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-100 p-8 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">로그인</h2>
        <p className="text-gray-600 mb-6"></p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="user@acme.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          계정이 없으신가요? <a href="/signup" className="text-blue-500">회원가입</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
