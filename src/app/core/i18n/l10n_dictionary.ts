interface L10nDefinition {
  en: string;
  pt: string;
}

export interface L10nDictionary {
  [key: string]: L10nDefinition;
}

export const dictionary: L10nDictionary = {
  common_description: {
    en: 'Description',
    pt: 'Descrição',
  },
  common_all_rights_reserved: {
    en: 'All rights reserved',
    pt: 'Todos os direitos reservados',
  },
  common_thank_you: {
    en: 'Thank you',
    pt: 'Obrigado',
  },
  download_app_cta_text: {
    en: 'Baixe o app para ver todos os anúncios e para criar os seus.',
    pt: 'Baixe o app para ver todos os anúncios e para criar os seus.',
  },
  email_confirmation_loading_state_title: {
    en: 'Verifying email address...',
    pt: 'Verificando endereço de email...',
  },
  email_confirmation_loading_state_message: {
    en: 'Please wait.',
    pt: 'Por favor aguarde.',
  },
  email_confirmation_success_state_title: {
    en: 'You account has been activated!',
    pt: 'Successo! Sua conta foi ativada!',
  },
  email_confirmation_success_state_message: {
    en: 'Your email has been verified. Use your email and password to login in to the app.',
    pt: 'Seu e-mail foi confirmado. Use seu e-mail e senha para fazer login no aplicativo.',
  },
  email_confirmation_error_state_title: {
    en: 'Something went wrong.',
    pt: 'Houve um problema.',
  },
  email_confirmation_error_state_message: {
    en: `We weren't able to verify your email address.`,
    pt: 'Não foi possível confirmar seu e-mail.',
  },
  email_confirmation_error_state_need_help: {
    en: 'Need help confirming your email address?',
    pt: 'Precisa de ajuda para confirmar seu email?',
  },
  email_confirmation_error_state_button_text: {
    en: 'Talk to us.',
    pt: 'Fale conosco.',
  },
  email_confirmation_error_request_assistance_message: {
    en: 'Hello! Something went wrong while verifying my emil: {{ value }}',
    pt: 'Olá! Não foi possível verificar meu e-mail: {{ value }}',
  },
  i_want_it: {
    en: 'I want it',
    pt: 'Eu quero',
  },
  landing_page_hero_download_the_app: {
    en: 'Get the app',
    pt: 'Baixe o app',
  },
  landing_page_hero_android: {
    en: 'Android',
    pt: 'Android',
  },
  landing_page_hero_ios: {
    en: 'iOS',
    pt: 'iOS',
  },
  landing_page_hero_title: {
    en: 'Felicidade dupla face',
    pt: 'Felicidade dupla face',
  },
  landing_page_hero_paragraph: {
    en: 'Doar faz bem. Receber, também! Faça parte de uma rede de desapego por doações na sua cidade.',
    pt: 'Doar faz bem. Receber, também! Faça parte de uma rede de desapego por doações na sua cidade.',
  },
  landing_page_feature_one_title: {
    en: 'Doe',
    pt: 'Doe',
  },
  landing_page_feature_one_paragraph: {
    en: 'Que tal se livrar do acúmulo e dar um final feliz para itens em bom estado que você não usa há muito tempo?',
    pt: 'Que tal se livrar do acúmulo e dar um final feliz para itens em bom estado que você não usa há muito tempo?',
  },
  landing_page_feature_two_title: {
    en: 'Receba',
    pt: 'Receba',
  },
  landing_page_feature_two_paragraph: {
    en: 'Baixe o app e descubra o que está sendo doado na sua cidade. Se você se interessar por algo, é só pedir para o anunciante.',
    pt: 'Baixe o app e descubra o que está sendo doado na sua cidade. Se você se interessar por algo, é só pedir para o anunciante.',
  },
  whatsapp_message_interested: {
    en: "Hello! I'm interested in the '{{ value }}' that you listed on Alguém Quer? :)",
    pt: "Olá! Me interessei pelo seu anúncio '{{ value }}' no Alguém Quer? :)",
  },
  i_want_it_dialog_title: {
    en: 'Get in touch with the owner by:',
    pt: 'Entre em contato com o anunciante por:',
  },
  i_want_it_dialog_whatsapp: {
    en: 'WhatsApp',
    pt: 'WhatsApp',
  },
  listing_detail_no_shipping_alert_pt_1: {
    en: 'This item must be collected in person in {{ value }}.',
    pt: 'Atenção: Este item deve ser retirado pessoalmente em {{ value }}.',
  },
  listing_detail_no_shipping_alert_pt_2: {
    en: "It won't be sent by mail.",
    pt: 'Não será enviado pelos correios.',
  },
  listing_detail_report_listing_title: {
    en: 'Report',
    pt: 'Denúncia',
  },
  listing_detail_report_listing_text: {
    en: 'Is there something awry with this listing? Report it here.',
    pt: 'Encontrou algo de errado com este anúncio? Denuncie-o aqui.',
  },
  listing_detail_report_listing_message: {
    en: "Hi! I'd like to report the listing: '{{ value }}'...",
    pt: "Olá! Quero denunciar o anúncio: '{{ value }}'...",
  },
  shared_member_since_: {
    en: 'On Alguém Quer since ',
    pt: 'No Alguém Quer desde ',
  },
  terms_acceptance_caption_by_contacting_: {
    en: 'By continuing, you agree to our  ',
    pt: 'Ao entrar em contato com o anunciante, declaro que aceito a ',
  },
  terms_acceptance_caption_read_: { en: 'Read our  ', pt: 'Confira a ' },
  terms_acceptance_caption_termos: {
    en: 'Terms of service',
    pt: 'Termos de serviço',
  },
  terms_acceptance_caption_and_the_: { en: ' and the ', pt: ' e os ' },
  terms_acceptance_caption_privacy: {
    en: 'Privacy policy',
    pt: 'Política de privacidade',
  },
  reset_password_messsage: {
    en: 'Ok! Go ahead and create a new password for your accont.',
    pt: 'Blz! Agora você pode criar um nova senha para sua conta.',
  },
  reset_password_input_label: {
    en: 'Enter a new password',
    pt: 'Insira uma nova senha',
  },
  reset_password_input_hint: {
    en: 'Passwords should be at least 6 characters long.',
    pt: 'A senha deve ter pelo menos 6 caractéres.',
  },
  reset_password_submit_buton: {
    en: 'Change password',
    pt: 'Alterar senha',
  },
  reset_password_alert_success_title: {
    en: 'Password updated!',
    pt: 'Senha alterada com sucesso!',
  },
  reset_password_alert_success_message: {
    en: 'You can log in with your new password.',
    pt: 'Você já pode acessar sua conta com sua nova senha.',
  },
  reset_password_alert_error_title: {
    en: 'Something went wrong',
    pt: 'Houve um erro.',
  },
  reset_password_alert_error_message: {
    en: "We weren't able to change your password.",
    pt: 'Não foi possível alterar sua senha.',
  },
  reset_password_help_question: {
    en: 'Need help resetting you password?',
    pt: 'Precisa de ajuda para redifinir sua senha?',
  },
  reset_password_support_message: {
    en: "Hi! I'm having problems resseting my password",
    pt: 'Olá! Não estou conseguindo redefinir minha senha.',
  },
  shared_talk_to_us: {
    en: 'Talk to us.',
    pt: 'Fale conosco.',
  },
};
