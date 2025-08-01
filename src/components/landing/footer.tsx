export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevCard. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
