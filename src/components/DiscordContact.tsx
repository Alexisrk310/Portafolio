import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { RippleButton } from './RippleButton';

type FormState = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  type: string;
  message: string;
}

const fieldStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  background: 'var(--bg-surface)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export function DiscordContact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', type: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'var(--accent)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'var(--border-subtle)';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      setStatus('error');
      return;
    }

    try {
      const embed = {
        title: `📬 Nuevo mensaje de ${form.name}`,
        color: 0x06b6d4,
        fields: [
          { name: '👤 Nombre', value: form.name, inline: true },
          { name: '📧 Email', value: form.email, inline: true },
          { name: '📋 Tipo', value: form.type || 'No especificado', inline: true },
          { name: '💬 Mensaje', value: form.message },
        ],
        footer: { text: 'Portafolio — alexis.dev' },
        timestamp: new Date().toISOString(),
      };

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', type: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative rounded-2xl p-8 neon-border-cyan"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Envíame un mensaje
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Respondo en menos de 24 horas.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-4 py-10 text-center"
          >
            <CheckCircle className="h-16 w-16 text-green-400" />
            <h4 className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
              ¡Mensaje enviado!
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Te responderé pronto. Gracias por contactarme.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-mono mb-1.5 uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Tu nombre"
                  required
                  style={fieldStyle}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-mono mb-1.5 uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="tu@email.com"
                  required
                  style={fieldStyle}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs font-mono mb-1.5 uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                Tipo de proyecto
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={fieldStyle}
              >
                <option value="">Selecciona una opción</option>
                <option>Full Stack App</option>
                <option>Frontend / Diseño Web</option>
                <option>Backend / API</option>
                <option>DevOps / Automatización</option>
                <option>Consultoría Técnica</option>
                <option>Trabajo Full-time</option>
                <option>Freelance / Proyecto</option>
              </select>
            </div>

            <div>
              <label
                className="block text-xs font-mono mb-1.5 uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                Mensaje *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                required
                rows={4}
                style={{ ...fieldStyle, resize: 'none' }}
              />
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="h-4 w-4" />
                Error al enviar. Intenta contactarme por email.
              </motion.div>
            )}

            <RippleButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar Mensaje
                </>
              )}
            </RippleButton>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
