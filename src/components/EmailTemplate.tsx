import * as React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export function EmailTemplate({ name, email, message, whatsapp }: EmailTemplateProps ) {
  return (
    <div>
      <h1>Contact Request from {name} </h1>
      <p><strong>Email: </strong>{email}</p>
      {whatsapp && <p><strong>WhatsApp: </strong>{whatsapp}</p>}
      <p><strong>Message: </strong></p>
      <p>{message}</p>
    </div>
  );
}
