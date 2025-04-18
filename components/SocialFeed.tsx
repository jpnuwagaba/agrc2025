"use client"

import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6"
import Link from "next/link"

interface SocialFeedProps {
  type: "twitter" | "linkedin"
  username?: string
  groupId?: string
  className?: string
}

export function SocialFeed({ type, username, groupId, className = "" }: SocialFeedProps) {
  return (
    <div className={`bg-white/10 rounded-lg p-4 flex flex-col ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        {type === "twitter" ? (
          <>
            <FaXTwitter className="h-5 w-5 text-white" />
            <span className="font-medium">@{username}</span>
          </>
        ) : (
          <>
            <FaLinkedinIn className="h-5 w-5 text-white" />
            <span className="font-medium">AGRC2025 EALAN LinkedIn Group</span>
          </>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-white/5 rounded p-4 text-center">
        <div className={`text-4xl mb-3 ${type === "twitter" ? "text-sky-400" : "text-blue-500"}`}>
          {type === "twitter" ? <FaXTwitter /> : <FaLinkedinIn />}
        </div>
        <p className="mb-4 text-sm">
          {type === "twitter"
            ? "Follow us on X for the latest updates and announcements"
            : "Join our LinkedIn group for professional networking and discussions"}
        </p>
        <Link
          href={type === "twitter" ? `https://x.com/${username}` : `https://www.linkedin.com/groups/${groupId}/`}
          target="_blank"
          className="bg-pigment_green hover:bg-pigment_green-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          {type === "twitter" ? "Follow on X" : "Join LinkedIn Group"}
        </Link>
      </div>
    </div>
  )
}
