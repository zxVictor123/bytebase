'use client'
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import SignInForm from "@/components/sign-in/sign-in-form";

const formSchema = z.object({
  email: z.string().email({
    message: "请输入电子邮件地址",
  }),
});

const SignIn = () => {
  return (
    <div className="flex justify-between h-screen">
      {/* 左图片 */}
      <div className="sm:hidden md:block md:w-1/2 relative">
        <Image src="/pictures/image.png" alt="signInImage" fill  className="object-cover"/>
      </div>
      {/* 右区域 */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      {/* 登录卡片 */}
        <div className="flex flex-col items-center space-y-5 scale-85 bg-white ">
          <Image src="/pictures/logo.svg" alt="alt" width={200} height={100}/>
          <p className="text-xl">欢迎</p>
          <p className="text-sm">登录 Bytebase 以继续使用 Bytebase Hub。</p>
          {/* 集成第三方登录区 */}
          <div className="w-80 flex flex-col space-y-3">
            <Button 
              variant="outline" 
              className="w-full h-12 justify-start gap-3 bg-white hover:bg-gray-50"
              onClick={() => signIn('google')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>继续使用 Google</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 justify-start gap-3 bg-white hover:bg-gray-50"
              onClick={() => signIn('github')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>继续使用 GitHub</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 justify-start gap-3 bg-white hover:bg-gray-50"
              onClick={() => signIn('microsoft')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#f25022" d="M1 1h10v10H1z"/>
                <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                <path fill="#7fba00" d="M1 13h10v10H1z"/>
                <path fill="#ffb900" d="M13 13h10v10H13z"/>
              </svg>
              <span>继续使用 Microsoft</span>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="inline h-[0.5px] w-35 bg-black"></div>
            <p>或</p>
            <div className="inline h-[0.5px] w-35 bg-black"></div>
          </div>
         <SignInForm/>
          <div className="w-full flex justify-start items-center">
            <p className="text-sm">没有账户？</p>
            <Link href="sign-up" className="text-sm text-blue-700">注册</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
