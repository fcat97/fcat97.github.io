export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="flex h-16 items-center justify-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} fCat97. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
