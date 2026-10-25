export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function isCurrentPath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  const normalised = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return normalised === href;
}
