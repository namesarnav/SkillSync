"use client";

import Link from "next/link";

export function RegisterForm() {
  return (
    <div className="mt-8 space-y-6">
      <div className="space-y-4">
        <Link
          href="/api/auth/login"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign up with Email
        </Link>

        <Link
          href="/api/auth/login?connection=github"
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign up with GitHub
        </Link>

        <Link
          href="/api/auth/login?connection=linkedin"
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign up with LinkedIn
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-sm">
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
