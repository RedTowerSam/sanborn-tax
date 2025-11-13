import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="w-full bg-brand-light">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <Image
            src="/images/Logo.webp"
            alt="Sanborn Tax Service"
            width={200}
            height={72}
            className="h-[72px] w-auto"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  );
}

