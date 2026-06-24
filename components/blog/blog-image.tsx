"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  placeholderLabel?: string;
}

export function BlogImage({
  src,
  alt,
  fill,
  width,
  height,
  priority,
  sizes,
  className,
  placeholderLabel,
}: BlogImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-surface",
          fill ? "absolute inset-0" : "",
          className
        )}
        style={!fill && width && height ? { width, height } : undefined}
        aria-label={alt}
      >
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-crimson/50">
          {placeholderLabel ?? "Field Note"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
