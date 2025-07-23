import * as React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps & { name: string; email: string; message: string }) {
  return (
    <div>
      <h1>Contact Request from {name} </h1>
      <p><strong>Email: </strong>{email}</p>
      <p><strong>Message: </strong></p>
      <p>{message}</p>
    </div>
  );
}
