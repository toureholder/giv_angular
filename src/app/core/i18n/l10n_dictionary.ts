interface L10nDefinition {
  en: string;
  pt: string;
}

export interface L10nDictionary {
  [key: string]: L10nDefinition;
}

export const dictionary: L10nDictionary = {
  comon_description: {
    en: 'Description',
    pt: 'Descrição',
  },
  i_want_it: {
    en: 'I want it',
    pt: 'Eu quero',
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
};
