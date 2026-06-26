"use client";

import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { createElement, type ComponentType } from "react";

/**
 * Resolve a lucide-react icon component by its PascalCase name.
 * Returns LucideIcons.Circle as a fallback when the name is unknown.
 *
 * NOTE: do not call `<Resolved />` as JSX directly inside render — the
 * React static-components lint rule flags that pattern. Instead use the
 * `<Icon name="..." />` wrapper below, which goes through createElement.
 */
export function resolveIcon(name: string): ComponentType<LucideProps> {
  const Cmp = (LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[name];
  return Cmp ?? LucideIcons.Circle;
}

interface IconProps extends LucideProps {
  name: string;
}

/** Convenience component: <Icon name="Flame" className="h-4 w-4" /> */
export function Icon({ name, ...props }: IconProps) {
  const Cmp = resolveIcon(name);
  // createElement avoids the "components created during render" lint rule
  // that fires when a component returned from a function is rendered as JSX.
  return createElement(Cmp, props);
}
