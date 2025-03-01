import emailjs from "emailjs-com";

type prop = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
  setIsSending: (value: boolean) => void;
  setStatus: (value: string) => void;
};

const sendEmail = ({
  name,
  email,
  whatsapp,
  message,
  setIsSending,
  setStatus,
}: prop) => {
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_EMAIL_KEY;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID;
  const templateParams = {
    name: name,
    email: email,
    whatsapp: whatsapp,
    message: message,
  };

  setIsSending(true);
  if (publicKey && serviceId && templateId) {
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setIsSending(false);
        setStatus(result.text);
      })

      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
};

export default sendEmail;
