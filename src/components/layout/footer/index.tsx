"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container mx-auto max-w-screen-sm py-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-muted-foreground">
            &copy; {year} Muzammil Loya. All rights reserved.
          </p>
          <p className="text-center text-muted-foreground">
            Made with ❤️ in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
