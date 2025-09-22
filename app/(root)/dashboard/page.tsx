"use client"

import { useSession } from "next-auth/react";


const Dashboard = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>加载中...</div>;
    }

    if (!session) {
        return <div>请先登录</div>;
    }
console.log(session)
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="flex items-center gap-4">
                {session.user?.image && (
                    <img 
                        src={session.user.image} 
                        alt="用户头像" 
                        width={50} 
                        height={50} 
                        className="rounded-full"
                    />
                )}
                <div>
                    <p className="font-semibold">{session.user?.name}</p>
                    <p className="text-gray-600">{session.user?.email}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;