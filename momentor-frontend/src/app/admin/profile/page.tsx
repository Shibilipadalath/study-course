"use client";

import React, { useState, FormEvent } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5001";

const CHANGE_PASSWORD_URL = `${API_BASE_URL}/api/auth/change-password`;
const TOKEN_KEY = "access_token"; // 👈 MUST match LoginForm localStorage key

interface ChangePasswordResponse {
  message?: string;
  success?: boolean;
}

export default function AdminProfilePage() {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChangePassword = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    // 🔐 Read token saved at login
    let token: string | null = null;
    if (typeof window !== "undefined") {
      token = window.localStorage.getItem(TOKEN_KEY);
    }

    if (!token) {
      setError("You are not logged in. Please log in again.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(CHANGE_PASSWORD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ EXACTLY what backend expects
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const text = await response.text();
      let data: ChangePasswordResponse | null = null;

      try {
        data = JSON.parse(text) as ChangePasswordResponse;
      } catch {
        data = null;
      }

      if (!response.ok) {
        const messageFromApi =
          data?.message ??
          (text && !text.startsWith("<") ? text : "Failed to change password");

        throw new Error(messageFromApi);
      }

      setSuccess(data?.message ?? "Password updated successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Profile Settings
        </h1>
        <p className="text-gray-600">Manage your profile information.</p>
      </div>

      {/* Change Password */}
      <form
        onSubmit={handleChangePassword}
        className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Change Password
        </h2>

        {error && (
          <p className="mb-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        {success && (
          <p className="mb-3 text-sm text-green-600 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
            {success}
          </p>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CF6943]"
              placeholder="Enter current password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CF6943]"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CF6943]"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-[#CF6943] text-white rounded-lg hover:bg-[#b95c3b] transition-colors disabled:opacity-60"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
