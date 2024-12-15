import Link from "next/link";

const TalkButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;

  if (!phoneNumber) {
    console.error(
      "WhatsApp phone number is not defined in the environment variables."
    );
    return null;
  }

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message || ""
  )}`;
  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="app__filled_btn min-w-[10rem]"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;
