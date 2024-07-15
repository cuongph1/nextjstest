import Image from "next/image";
import { createStore } from "zustand";
import urlJoin from "url-join";

export type ApplicationSettingsState = {
  appId: string;
  pageId: string;
  appVersion: string;
};

export type ApplicationSettingsActions = {
  fetchSettings: () => Promise<void>;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Hello, Home page!ssss</h1>
      </div>
    </main>
  );
}
