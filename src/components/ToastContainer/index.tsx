import React, { useCallback } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
  removeToast(id: string): void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
  removeToast,
}) => {
  const handleRemoveToast = useCallback(
    (id) => {
      removeToast(id);
    },
    [removeToast],
  );

  return (
    <Container>
      {messages.map((message) => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertCircle size={18} />

          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button type="button" onClick={() => handleRemoveToast(message.id)}>
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
