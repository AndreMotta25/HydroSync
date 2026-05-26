"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  newsletterSchema,
  type NewsletterInput,
} from "@/lib/validations/newsletter";

const EXPLORE_LINKS = [
  "Bio-tecnologia",
  "Estudos Clínicos",
  "Suporte Técnico",
  "Comunidade",
];

const CONNECT_LINKS = ["Instagram", "LinkedIn", "Newsletter"];

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(data: NewsletterInput) {
    // TODO: chamar API route /api/newsletter
    console.log("Newsletter:", data.email);
    reset();
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            E-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            className="w-full bg-surface-container-low border-transparent rounded-full px-6 py-3 font-body text-sm focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none text-base min-h-[44px]"
            {...register("email")}
          />
        </div>
        <Button
          type="submit"
          variant="dark"
          loading={isSubmitting}
          className="w-12 h-12 min-h-0 px-0 py-0 shrink-0"
          aria-label="Inscrever-se"
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            arrow_forward
          </span>
        </Button>
      </div>
      {errors.email && (
        <p className="text-error text-xs pl-6">{errors.email.message}</p>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-white py-24 border-t border-outline/5">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-headline text-[28px] font-bold text-primary mb-8 tracking-tighter">
            HydroSync
          </div>
          <p className="text-on-surface-variant font-medium leading-relaxed max-w-xs">
            Pioneirismo em hidratação de precisão para mentes de alta
            performance.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold mb-10 text-xs uppercase tracking-[0.2em] text-on-surface/40">
            EXPLORAR
          </h4>
          <div className="flex flex-col gap-5">
            {EXPLORE_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-bold mb-10 text-xs uppercase tracking-[0.2em] text-on-surface/40">
            CONECTAR
          </h4>
          <div className="flex flex-col gap-5">
            {CONNECT_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-10 text-xs uppercase tracking-[0.2em] text-on-surface/40">
            BIO-NEWS
          </h4>
          <p className="text-on-surface-variant mb-6 text-sm">
            Receba insights sobre biohacking e performance.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mt-24 pt-12 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-label text-on-surface-variant opacity-60">
          &copy; 2024 HydroSync Systems. Todos os direitos reservados.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
          <a href="#" className="hover:text-primary transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
