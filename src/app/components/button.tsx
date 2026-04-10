import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

/*
 * Button component system based on ung.no Figma design.
 *
 * States derived from Figma grid (columns = Default → Hover → Focus → Active → Disabled):
 *
 * ┌──────────────┬───────────────┬───────────────┬──────────────────────────────────┬───────────────┬───────────────┐
 * │ Variant      │ Default       │ Hover         │ Focus                            │ Active        │ Disabled      │
 * ├──────────────┼───────────────┼───────────────┼──────────────────────────────────┼───────────────┼───────────────┤
 * │ primary      │ bg-[#2b5944]  │ bg-[#3c7c5e]  │ bg-[#2b5944] + ring-[#0f0f0f]   │ bg-[#1b372a]  │ bg-[#dfdfdf]  │
 * │ secondary    │ bg-white      │ bg-[#deefe7]  │ bg-white + ring-white            │ bg-[#acd7c3]  │ bg-[#dfdfdf]  │
 * │ outline      │ bdr-[#0f0f0f] │ bg-[#deefe7]  │ bdr-[#0f0f0f] + ring-[#0f0f0f]  │ bg-[#acd7c3]  │ bdr-[#888]    │
 * │ outline-white│ bdr-white     │ bg-[#2b5944]  │ bdr-white + ring-white           │ bg-[#acd7c3]  │ bdr-[#afafaf] │
 * │ link         │ txt-[#0f0f0f] │ txt-[#2b5944] │ txt-[#0f0f0f] + ring-[#0f0f0f]  │ txt-[#1b372a] │ txt-[#888]    │
 * │ link-white   │ txt-white     │ txt-[#acd7c3] │ txt-white + ring-white           │ txt-[#cfe8dc] │ txt-[#888]    │
 * └──────────────┴───────────────┴───────────────┴──────────────────────────────────┴───────────────┴───────────────┘
 */

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-white"
  | "link"
  | "link-white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

/* ─── Shared text style (font, size, tracking) ─── */
const textCls =
  "font-['Open_Sans',sans-serif] text-[16px] leading-[24px] tracking-[-0.064px] whitespace-nowrap";
const textWeight: CSSProperties = { fontWeight: 600 };

/* ─── Focus ring helpers ─── */
// Pill buttons: 2px ring, 2px outside the button boundary (inset-[-2px] in Figma)
const focusRingDark =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f0f0f] focus-visible:ring-offset-2";
const focusRingLight =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2";

export function Button({
  variant = "primary",
  icon,
  iconRight,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  const isLink = variant === "link" || variant === "link-white";

  /* ═══════════ Link-style buttons ═══════════ */
  if (isLink) {
    const isDark = variant === "link-white";

    // Build state classes for text color
    const textColor = disabled
      ? "text-[#888]"
      : isDark
        ? "text-white hover:text-[#acd7c3] active:text-[#cfe8dc]"
        : "text-[#0f0f0f] hover:text-[#2b5944] active:text-[#1b372a]";

    // Underline color tracks the text color via currentColor
    const focusCls = disabled
      ? ""
      : isDark
        ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f0f0f]";

    return (
      <button
        disabled={disabled}
        className={`group flex flex-col gap-1 items-center justify-center min-h-[44px] py-2 rounded-[50px] transition-colors ${textColor} ${focusCls} ${
          disabled ? "cursor-not-allowed" : ""
        } ${className}`}
        {...rest}
      >
        <div className="flex gap-1 items-center btn-icon-inherit">
          {icon}
          <span className={textCls} style={textWeight}>
            {children}
          </span>
          {iconRight}
        </div>
        {/* Underline — uses currentColor so it follows text state color */}
        <div className="h-0.5 w-full bg-current" />
      </button>
    );
  }

  /* ═══════════ Filled / Outline pill buttons ═══════════ */
  const isOutline = variant === "outline" || variant === "outline-white";

  // Build state-specific class string per variant
  let stateClasses = "";
  let borderColor = "";
  let textColor = "";

  if (disabled) {
    /* Disabled overrides everything */
    if (isOutline) {
      const isWhite = variant === "outline-white";
      borderColor = isWhite ? "border-[#afafaf]" : "border-[#888]";
      textColor = isWhite ? "text-[#afafaf]" : "text-[#888]";
      stateClasses = "cursor-not-allowed";
    } else {
      textColor = "text-[#888]";
      stateClasses = "bg-[#dfdfdf] cursor-not-allowed";
    }
  } else {
    switch (variant) {
      /* ── Primary (filled, light context) ── */
      case "primary":
        textColor = "text-white";
        stateClasses = [
          "bg-[#2b5944]",
          "hover:bg-[#3c7c5e]",
          "active:bg-[#1b372a]",
          focusRingDark,
        ].join(" ");
        break;

      /* ── Secondary (filled, dark context) ── */
      case "secondary":
        textColor = "text-[#0f0f0f]";
        stateClasses = [
          "bg-white",
          "hover:bg-[#deefe7]",
          "active:bg-[#acd7c3]",
          focusRingLight,
        ].join(" ");
        break;

      /* ── Outline (light context) ── */
      case "outline":
        textColor = "text-[#0f0f0f]";
        borderColor = "border-[#0f0f0f]";
        stateClasses = [
          "hover:bg-[#deefe7]",
          "active:bg-[#acd7c3]",
          focusRingDark,
        ].join(" ");
        break;

      /* ── Outline-white (dark context) ── */
      case "outline-white":
        textColor = "text-white";
        borderColor = "border-white";
        stateClasses = [
          "hover:bg-[#2b5944]",
          "active:bg-[#acd7c3] active:text-[#0f0f0f]",
          focusRingLight,
        ].join(" ");
        break;
    }
  }

  if (isOutline) {
    return (
      <button
        disabled={disabled}
        className={`flex gap-2 items-center justify-center min-h-[44px] px-5 py-2.5 rounded-[9999px] relative transition-colors ${textColor} ${stateClasses} ${fullWidth ? "w-full" : ""} ${className}`}
        {...rest}
      >
        {/* Inset border overlay (matches Figma pattern) */}
        <div
          aria-hidden
          className={`absolute border ${borderColor} inset-0 pointer-events-none rounded-[9999px]`}
        />
        {icon && <span className="btn-icon-inherit">{icon}</span>}
        <span className={`${textCls}`} style={textWeight}>
          {children}
        </span>
        {iconRight && <span className="btn-icon-inherit">{iconRight}</span>}
      </button>
    );
  }

  /* Filled button */
  return (
    <button
      disabled={disabled}
      className={`flex gap-2 items-center justify-center min-h-[44px] px-5 py-2.5 rounded-[9999px] transition-colors ${textColor} ${stateClasses} ${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {icon && <span className="btn-icon-inherit">{icon}</span>}
      <span className={`${textCls}`} style={textWeight}>
        {children}
      </span>
      {iconRight && <span className="btn-icon-inherit">{iconRight}</span>}
    </button>
  );
}