import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"898f3c37-3dd9-4e1f-b1ea-bcef37edeee4","homePageId":"6f18ccad-f73a-4569-8fd7-b3643a125796","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true,"isDefaultPath":false}],"background":{},"workflows":[],"pages":[{"id":"ae4ca0f1-d754-4028-b991-2251c09d8c69","linkId":"ae4ca0f1-d754-4028-b991-2251c09d8c69","name":"footer","folder":null,"paths":{"en":"footer","default":"footer"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"48502a3a-4990-45bb-82f9-f181155f72ac","sectionTitle":"Footer Section","linkId":"ba1f4c78-d0c3-4458-abe3-331b47f7864d"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{"pt":""}},"metaImage":""},{"id":"93484260-a048-469c-9272-5c5097089a37","linkId":"93484260-a048-469c-9272-5c5097089a37","name":"sobrenos","folder":null,"paths":{"en":"sobrenos","default":"sobrenos"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ba9d894-0b00-4728-9a4d-99d0bf130f21","sectionTitle":"HeaderVeluxia","linkId":"1b785e32-8e96-44d6-a1af-aae5be161c38"},{"uid":"f9a97c77-bb73-479e-9edb-5e0ad812c47d","sectionTitle":"Main Content Section","linkId":"5bb6eead-aa1f-454f-a20a-fb3a020e8896"},{"uid":"bc17d4d7-cdef-49be-9ef9-0ee1a0a940ee","sectionTitle":"FooterVeluxia","linkId":"566f5c75-27e3-4811-b8f1-92f0732af21e"},{"uid":"72071036-d253-4c54-bcdd-a0d398fec15f","sectionTitle":"WhatsApp","linkId":"575f9fc0-f209-40a9-a648-dcd69b2969f4"}],"pageUserGroups":[],"title":{"pt":"Sobre a VeluxIA — Tecnologia e Inovação"},"meta":{"desc":{"pt":"Somos uma equipe focada em simplificar tecnologia para empresas: sites, apps, integrações e automação.\n"},"keywords":{},"socialDesc":{"pt":"Conheça nossa missão e valores.\n"},"socialTitle":{"pt":"Sobre a VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"aceae19d-f107-4736-b052-3bf8c06d1a83","linkId":"aceae19d-f107-4736-b052-3bf8c06d1a83","name":"terms","folder":null,"paths":{"en":"terms","default":"terms"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a3589014-bd8f-4803-99ca-391096dad314","sectionTitle":"HeaderVeluxia","linkId":"a804c51e-9672-4610-9add-38354cf4b563"},{"uid":"f096bbac-670b-45be-8616-6250269d3aa4","sectionTitle":"Main Section","linkId":"05522134-4aa9-4b93-bcc0-615925db2c40"},{"uid":"e8c6997d-21b2-45d2-8575-365c9c6e8a08","sectionTitle":"FooterVeluxia","linkId":"3a2396ce-6728-4fd9-9def-9f98dd4d7b37"},{"uid":"ff3ee93e-a7cd-4871-a0d0-773165ae7776","sectionTitle":"WhatsApp","linkId":"66f3a70b-4cb6-4dd5-acb7-50ded9816ad3"}],"pageUserGroups":[],"title":{"pt":"Termos de Uso — VeluxIA"},"meta":{"desc":{"pt":"Condições gerais de uso do site e dos serviços VeluxIA.\n"},"keywords":{},"socialDesc":{"pt":"Condições gerais de uso."},"socialTitle":{"pt":"Termos de Uso — VeluxIA"},"structuredData":{"pt":""}},"metaImage":""},{"id":"0995a8e9-908c-4d32-a478-4465c4584347","linkId":"0995a8e9-908c-4d32-a478-4465c4584347","name":"contato","folder":null,"paths":{"en":"contato","default":"contato"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d4904c2b-5574-4c5e-971a-edc6d5bce7cc","sectionTitle":"HeaderVeluxia","linkId":"40bd437f-dea7-4068-a212-e3ab160af491"},{"uid":"2a126cf3-4216-450a-8850-78c5d61567af","sectionTitle":"Contact Hero Section","linkId":"f6b02209-49b6-4802-b35f-60313b9826d9"},{"uid":"eea3c046-83e4-4ade-8d46-433c43e37dce","sectionTitle":"Contact Main Section","linkId":"1a99b967-c7ca-4556-be1c-524cb86d3e7d"},{"uid":"bcc6945f-ab57-408c-a344-468da425c2e7","sectionTitle":"Map Section","linkId":"a1269397-35cd-4413-97a1-a8668fc4b816"},{"uid":"e6b6ff9f-49c3-44f8-b528-acb322c9a3cc","sectionTitle":"FooterVeluxia","linkId":"442a08ef-f843-4914-b090-82e682b40cff"},{"uid":"dcd4dc90-0e79-403b-b275-11520fd2f8d1","sectionTitle":"WhatsApp","linkId":"5713394f-4efb-4207-b8ef-8ee674b86007"}],"pageUserGroups":[],"title":{"pt":"Contato — Fale com a VeluxIA"},"meta":{"desc":{"pt":"Fale com nosso time: e-mail, WhatsApp e formulário. Atendimento em horário comercial.\n"},"keywords":{},"socialDesc":{"pt":"Tire dúvidas e fale com um especialista.\n"},"socialTitle":{"pt":"Contato — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"7fd9e468-7014-4b6d-b0b8-1f076e0632b8","linkId":"7fd9e468-7014-4b6d-b0b8-1f076e0632b8","name":"carreira","folder":null,"paths":{"en":"carreira","default":"carreira"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"979e013d-dbeb-4d77-8268-061178df814b","sectionTitle":"HeaderVeluxia","linkId":"6f235415-3d6a-4879-9c61-246b3e0df115"},{"uid":"79cbc102-0955-4ee4-bb97-04ffd49930c9","sectionTitle":"Support Main Section","linkId":"70121847-0528-4481-abfc-a6464f1b2bdb"},{"uid":"84b6c43c-5091-4aff-9214-e6d653bc0702","sectionTitle":"FooterVeluxia","linkId":"971c3044-5640-4b67-9eaf-da725624fcf8"},{"uid":"bb1f569c-00cb-4007-858e-16064aa88c6b","sectionTitle":"WhatsApp","linkId":"e6df8b73-9bd7-4ccb-bb30-eb39e88a5d18"}],"pageUserGroups":[],"title":{"pt":"Carreiras na VeluxIA — Trabalhe Conosco"},"meta":{"desc":{"pt":"Veja vagas abertas e envie seu perfil. Ambiente de aprendizado contínuo e projetos reais.\n"},"keywords":{},"socialDesc":{"pt":"Vagas e oportunidades.\n"},"socialTitle":{"pt":"Trabalhe na VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"99715df9-5d97-4f2b-a0c8-882224e68841","linkId":"99715df9-5d97-4f2b-a0c8-882224e68841","name":"privacy","folder":null,"paths":{"en":"privacy","default":"privacy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e4b4686-21c5-4b64-8d00-77e1dce36f39","sectionTitle":"HeaderVeluxia","linkId":"71c4f81c-c94c-426d-a75b-63329adab189"},{"uid":"c603aa5b-6034-42f1-afe6-4aced5d48eb6","sectionTitle":"Main Section","linkId":"da1d0b10-9a02-448b-bec1-e31e65406450"},{"uid":"b0990cd7-2718-4842-bb7f-3560abf1351d","sectionTitle":"FooterVeluxia","linkId":"12225b90-b9ff-448c-aa35-57012181f69a"},{"uid":"441262d1-0c28-4214-aa03-8b37ac2499a5","sectionTitle":"WhatsApp","linkId":"e3081cc4-fce7-4539-9c31-b2a416e95941"}],"pageUserGroups":[],"title":{"pt":"Política de Privacidade — VeluxIA"},"meta":{"desc":{"pt":"Saiba como tratamos seus dados pessoais de forma transparente e segura.\n"},"keywords":{},"socialDesc":{"pt":"Transparência e segurança no tratamento de dados."},"socialTitle":{"pt":"Política de Privacidade — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"66c87389-5a22-4470-94aa-5969372219ae","linkId":"66c87389-5a22-4470-94aa-5969372219ae","name":"planos","folder":null,"paths":{"en":"planos","default":"planos"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5fa2fb26-b041-40b5-99c0-84783926ffbb","sectionTitle":"HeaderVeluxia","linkId":"1a01ef9d-672c-42da-8c10-05f3ec0adcee"},{"uid":"954ff8bd-9526-4a86-9808-9b4490e8053a","sectionTitle":"Main Content Section","linkId":"fada32d9-1aa3-4e60-a13c-60dcea3c7b70"},{"uid":"a21b1600-7480-46c8-ae0c-f7bd72f0a55b","sectionTitle":"FooterVeluxia","linkId":"2f205956-613b-4f1c-95cf-ac81e2a53eaf"},{"uid":"72ac27e4-8d59-43b0-8c1a-199c07b857d7","sectionTitle":"WhatsApp","linkId":"6b950f82-bcac-4a06-949d-27e6b205e445"}],"pageUserGroups":[],"title":{"pt":"Planos VeluxIA — Start, Pro e Enterprise"},"meta":{"desc":{"pt":"Escolha o plano ideal: Start (embed e e-mail), Pro (conta gerenciada + WhatsApp) ou Enterprise (OAuth/middleware). Suporte técnico e implantação rápida.\n"},"keywords":{},"socialDesc":{"pt":"Compare recursos e feche online.\n"},"socialTitle":{"pt":"Planos — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"443477b3-2ba7-4fdf-bf91-19e9f13db02d","linkId":"443477b3-2ba7-4fdf-bf91-19e9f13db02d","name":"suporte","folder":null,"paths":{"en":"suporte","default":"suporte"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5f4ed9ed-20c9-4cbc-953a-9cf853a205dc","sectionTitle":"HeaderVeluxia","linkId":"abc5c9b1-44b2-43e3-a812-3a2012a94457"},{"uid":"fc0527dd-b9e8-407b-b787-683e6d0395f0","sectionTitle":"Main Content Section","linkId":"86c38dd3-4788-4f6c-9e9a-3611c9a788a5"},{"uid":"02e824ec-eeed-4e7d-bf76-8aebc1d4b624","sectionTitle":"FooterVeluxia","linkId":"6822e144-9515-4fcc-9c81-395576c42fbf"},{"uid":"34234162-8b77-4eef-a497-8b380009747a","sectionTitle":"WhatsApp","linkId":"50655c56-c0d5-4f97-b92c-9305ac6a844f"}],"pageUserGroups":[],"title":{"pt":"Suporte Técnico — VeluxIA"},"meta":{"desc":{"pt":"Abra um chamado, anexe arquivos e acompanhe o status. Para urgências, use o agendamento online.\n"},"keywords":{},"socialDesc":{"pt":"Abra seu ticket em minutos.\n"},"socialTitle":{"pt":"Suporte Técnico — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"65d29e35-6ba1-4d79-b8bd-d3891f61ae9b","linkId":"65d29e35-6ba1-4d79-b8bd-d3891f61ae9b","name":"AreaDoCliente","folder":null,"paths":{"en":"areadocliente","default":"areadocliente"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"9ce77a96-0b5f-4024-910e-364be35687d4","sectionTitle":"Section","linkId":"2dbd06d1-4c4d-4b04-a3cf-4d517341682c"},{"uid":"4537284d-cd35-4d31-941e-791ed35b1ceb","sectionTitle":"Footer Section","linkId":"52d2fc92-6153-470d-be63-9a9de4130bf1"}],"pageUserGroups":[{}],"title":{"pt":"Área do Cliente — VeluxIA"},"meta":{"desc":{"pt":"Acesse sua conta para acompanhar projetos, tickets e agendamentos.\n"},"keywords":{},"socialDesc":{"pt":"Acesso autenticado."},"socialTitle":{"pt":"Área do Cliente — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"f1a51c7b-9080-40d7-b005-4db972aa90d0","linkId":"f1a51c7b-9080-40d7-b005-4db972aa90d0","name":"faq","folder":null,"paths":{"en":"faq","default":"faq"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"337cfe83-77cf-4423-9b58-f32407993c9f","sectionTitle":"HeaderVeluxia","linkId":"bcfa8db0-f017-4b94-aacb-93b5016ce0f9"},{"uid":"a3304040-ea2e-46b4-a741-bd55c15359b0","sectionTitle":"FAQ Main Section","linkId":"9063a6fb-d351-407f-95df-444e411fb648"},{"uid":"0c4736a0-b05a-40a3-864d-8179c815fce7","sectionTitle":"FooterVeluxia","linkId":"5f152acc-ec15-4700-96b5-aad95edec095"},{"uid":"f6ab80a4-6d0f-4306-9733-2752293436e2","sectionTitle":"WhatsApp","linkId":"f06b36cc-c8c7-4884-9275-f7b2daf6f1a1"}],"pageUserGroups":[],"title":{"pt":"FAQ VeluxIA — Perguntas Frequentes"},"meta":{"desc":{"pt":"Dúvidas sobre agendamento, prazos, privacidade e integrações? Veja as respostas mais comuns.\n"},"keywords":{},"socialDesc":{"pt":"Tudo o que você precisa saber.\n"},"socialTitle":{"pt":"FAQ — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"a4a2e919-fb01-45b9-99cc-551155c6bd73","linkId":"a4a2e919-fb01-45b9-99cc-551155c6bd73","name":"solucoes","folder":null,"paths":{"en":"solucoes","default":"solucoes"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a71b700b-a77c-43bc-ab05-a108dd165555","sectionTitle":"HeaderVeluxia","linkId":"8c8fc64c-700e-4206-9eda-b4cd14318d78"},{"uid":"f3a557df-5968-4e39-b389-911449a53bc0","sectionTitle":"Page Title Section","linkId":"45272c8b-9de2-4b08-8849-69e61f997656"},{"uid":"ce57d160-d518-4943-bdb5-dfb2f8e132eb","sectionTitle":"Sistema de Agendamento","linkId":"6405460d-7ced-42f9-a0fa-7ad86571a9b8"},{"uid":"059aaa91-0df9-44d4-8f03-074eee60168d","sectionTitle":"Dashboard de BI","linkId":"2c7ef59f-b52b-48e4-bd5f-c2fd5bf2341b"},{"uid":"80e5fb1d-6097-4ebc-973c-fcf7ef06fa18","sectionTitle":"Portal do Cliente","linkId":"3a7eecf6-d177-4369-b7c6-70200bf61fd1"},{"uid":"49475791-d35a-4432-8610-51150f65e307","sectionTitle":"CRM Inteligente","linkId":"a8562fa0-cfea-4569-b4ab-db850ef0c393"},{"uid":"38c5030f-e9ad-4803-b35f-b245531553f2","sectionTitle":"FooterVeluxia","linkId":"eb977693-39d2-43ed-8401-5c3ca3ec6bbd"},{"uid":"e3eb0c25-89f6-4958-b1b2-d8dcc3e78adc","sectionTitle":"WhatsApp","linkId":"2374b5c6-8704-4dc2-a217-9a181962da97"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Soluções Digitais VeluxIA — Sites, Apps e Automação"},"meta":{"desc":{"pt":"Criação de sites e apps, integrações no-code/low-code e automações. Implementamos calendários, WhatsApp Cloud API e fluxos sob medida para sua operação."},"keywords":{},"socialDesc":{"pt":"Sites, apps e automações que destravam crescimento.\n"},"socialTitle":{"pt":"Soluções Digitais — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"d9b89115-357e-40ef-8294-302007945820","linkId":"d9b89115-357e-40ef-8294-302007945820","name":"cases","folder":null,"paths":{"en":"cases","default":"cases"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a74f423c-9333-47ac-b20e-2a4ece3c0871","sectionTitle":"HeaderVeluxia","linkId":"058ea1e4-b86f-4023-ab4d-f6648c272acd"},{"uid":"05e1abbc-c112-4e0c-a942-99810592bd2e","sectionTitle":"Cases Title Section","linkId":"510c43e8-9195-44dd-ae5c-b72c2d0c2146"},{"uid":"da6c2a2a-14da-4acc-8973-3853ff25bd2c","sectionTitle":"Cases Grid Section","linkId":"4477068a-b181-4ddc-977c-b50acb46f402"},{"uid":"bfaaaf4e-ec7a-4a55-bbd8-24b7d5b27c1b","sectionTitle":"FooterVeluxia","linkId":"c01d0bf5-a0e8-4335-b153-bc331ddd3512"},{"uid":"786e38c9-6359-44cd-9ac5-202fe1895d0b","sectionTitle":"WhatsApp","linkId":"be2205d6-bf45-4554-a2ce-397da8649741"}],"pageUserGroups":[],"title":{"pt":"Cases VeluxIA — Projetos e Resultados"},"meta":{"desc":{"pt":"Veja projetos reais: implantação de agendamentos, WhatsApp Cloud API, dashboards e integrações que melhoram atendimento e conversão.\n"},"keywords":{},"socialDesc":{"pt":"Projetos que geram valor na prática.\n"},"socialTitle":{"pt":"Cases — VeluxIA"},"structuredData":{"pt":""}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"6f18ccad-f73a-4569-8fd7-b3643a125796","linkId":"6f18ccad-f73a-4569-8fd7-b3643a125796","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"1cdbc754-2c3b-477f-b05a-295f99d4a795","sectionTitle":"HeaderVeluxia","linkId":"41f20f58-2fd9-4ba6-a628-6f8b13b9b88e"},{"uid":"0303b65c-79fd-4f82-a701-2513427f7a7f","sectionTitle":"Hero Section","linkId":"fa36853f-5b0b-41e5-b764-bafec6c3d6d8"},{"uid":"8a6b5553-3dbc-4994-872d-de9672443628","sectionTitle":"Solutions Section","linkId":"8c04a5db-cde1-4dad-82c0-d40fc3b46c3d"},{"uid":"a5f9d718-c36b-4130-80ff-6ec0a7caaeda","sectionTitle":"CTA Section","linkId":"eb30129e-eb6b-40ea-9a11-391d8447b779"},{"uid":"90a9babc-61a5-4830-b8f1-12486c8978cf","sectionTitle":"Testimonials Section","linkId":"74f5a9af-848e-4b69-9253-cc3f8fc2ec51"},{"uid":"80b4cd86-2f09-4632-90c7-694e49ac4552","sectionTitle":"FooterVeluxia","linkId":"08bd8c1e-47a8-41d4-92f2-a3b1fd69eb40"},{"uid":"c63267f6-ff72-48e5-8ad7-9f68c6bc9d6c","sectionTitle":"WhatsApp","linkId":"75d67af8-028e-465f-b242-61d3103fd76b"}],"pageUserGroups":[],"title":{"en":"VeluxIA — Agendamento, Suporte Técnico e Soluções Digitais","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Agende online seu suporte técnico com a VeluxIA. Horários livres em tempo real, confirmação por e-mail e lembretes. Soluções digitais sob medida para seu negócio."},"keywords":{"en":"agendamento online, suporte técnico, weweb, integração google calendar, whatsapp api, automação"},"socialDesc":{},"socialTitle":{"en":"VeluxIA — Agendamento e Suporte Técnico"},"structuredData":{"en":"{\r\n    \"@context\": \"https://schema.org\",\r\n    \"@type\": \"Organization\",\r\n    \"name\": \"VeluxIA Tecnologia e Inovação Ltda\",\r\n    \"url\": \"https://www.veluxia.com.br\",\r\n    \"logo\": \"https://www.veluxia.com.br/assets/logo-veluxia.png\",\r\n    \"contactPoint\": [\r\n        {\r\n            \"@type\": \"ContactPoint\",\r\n            \"contactType\": \"customer support\",\r\n            \"email\": \"contato@veluxia.com.br\",\r\n            \"availableLanguage\": [\r\n                \"Portuguese\",\r\n                \"English\"\r\n            ]\r\n        }\r\n    ],\r\n    \"sameAs\": [\r\n        \"https://www.instagram.com/veluxia\",\r\n        \"https://www.linkedin.com/company/veluxia\"\r\n    ]\r\n}"}},"metaImage":"images/og-veluxia-home.png?_wwcv=51"},{"id":"38332009-5197-4378-af0d-baea2b69deb5","linkId":"38332009-5197-4378-af0d-baea2b69deb5","name":"orcamento","folder":null,"paths":{"en":"orcamento","default":"orcamento"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2cfaae7e-5215-4ad5-8ced-cf1f1e2d0098","sectionTitle":"HeaderVeluxia","linkId":"ff7e8f5e-7e01-4d44-b7c9-57ff12feeac1"},{"uid":"dd321b4e-963b-4504-a79a-8190fda3fd39","sectionTitle":"Main Content Orcamento","linkId":"dce35e18-bcb6-4af9-bd01-03ec52a33d10"},{"uid":"86b9a436-990f-48e2-856e-70d12cec7628","sectionTitle":"FooterVeluxia","linkId":"41775909-403e-462a-9bee-6fb95a8f07d4"},{"uid":"a4321a4c-7429-4662-8da2-380084540b0c","sectionTitle":"WhatsApp","linkId":"1bec3052-7832-4105-95c4-c560b580ebc9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"44346586-0c4a-40e9-a2ce-20f8456e68e8","linkId":"44346586-0c4a-40e9-a2ce-20f8456e68e8","name":"orcamentos","folder":null,"paths":{"en":"orcamento-copy","default":"orcamento-copy"},"langs":[],"cmsDataSetPath":null,"sections":[{"uid":"1a7f9f30-776a-4362-8659-d4a0245c5359","sectionTitle":"HeaderVeluxia","linkId":"57327689-bb52-4035-857a-681857a33251"},{"uid":"8bb720ff-0d7b-4c40-b8d8-5a4c4624a82b","sectionTitle":"Main Content","linkId":"54880be1-0ecc-4df5-85df-603b19928a41"},{"uid":"86235e47-04dc-461d-8d2a-1e3b4de43cdd","sectionTitle":"FooterVeluxia","linkId":"e36caa38-99ce-462b-bfb1-daa706652c83"},{"uid":"2ee478d9-42b8-467e-89c1-b41838a062ea","sectionTitle":"WhatsApp","linkId":"73b22ba1-2112-4fc2-9955-b0e13f867057"}],"pageUserGroups":[],"title":{"pt":"Orçamento — Projetos e Suporte VeluxIA"},"meta":{"desc":{"pt":"Solicite uma proposta. Informe objetivo e prazos; retornamos com escopo, investimento e cronograma. Atendimento em todo o Brasil.\n"},"keywords":{},"socialDesc":{"pt":"Conte sua necessidade e receba proposta.\n"},"socialTitle":{"pt":"Orçamento — VeluxIA"},"structuredData":{"pt":""}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 51;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
