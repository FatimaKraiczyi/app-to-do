// Layout patterns extraídos do Figma
export const layout = {
  // Screen containers
  screen: {
    container: {
      flex: 1,
      backgroundColor: '#080808', // rgba(8, 8, 8, 1)
      paddingHorizontal: 32, // padding lateral das telas
    },

    centerContent: {
      flex: 1,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
    },
  },

  // Content sections
  content: {
    // Seção principal com logo e textos
    headerSection: {
      alignSelf: 'stretch' as const,
      alignItems: 'center' as const,
      gap: 32, // espaçamento entre logo e textos
    },

    // Seção de textos (título + subtítulo)
    textSection: {
      alignSelf: 'stretch' as const,
      alignItems: 'flex-start' as const,
      gap: 4, // espaçamento pequeno entre título e subtítulo
    },

    // Seção de formulário
    formSection: {
      alignSelf: 'stretch' as const,
      alignItems: 'center' as const,
      gap: 24, // espaçamento entre inputs e botão
      borderRadius: 12,
    },

    // Container dos inputs
    inputContainer: {
      alignSelf: 'stretch' as const,
      alignItems: 'flex-start' as const,
      gap: 12, // espaçamento entre inputs
    },

    // Seção inferior (link de navegação)
    footerSection: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      alignSelf: 'stretch' as const,
      justifyContent: 'center' as const,
      gap: 4, // espaçamento pequeno entre textos
    },
  },

  // Input field patterns
  input: {
    // Container do input field (wrapper)
    fieldContainer: {
      height: 80, // altura total do campo
      alignSelf: 'stretch' as const,
    },

    // Input em si
    field: {
      position: 'absolute' as const,
      top: 32, // posição do input dentro do container
      alignSelf: 'stretch' as const,
      backgroundColor: '#1D1D1D', // rgba(29, 29, 29, 1)
      borderWidth: 0.8,
      borderColor: '#979797', // rgba(151, 151, 151, 1)
      borderRadius: 4,
      padding: 12,
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      gap: 8, // gap para password dots ou ícones
    },

    // Label do input
    label: {
      position: 'absolute' as const,
      top: 0,
      height: 24,
      color: 'rgba(255, 255, 255, 0.87)',
      fontSize: 14,
      fontFamily: 'Lato',
      fontWeight: '400' as const,
      lineHeight: 24.08,
    },

    // Placeholder text
    placeholder: {
      color: '#535353', // rgba(83, 83, 83, 1)
      fontSize: 14,
      fontFamily: 'Lato',
      fontWeight: '400' as const,
      lineHeight: 24.08,
    },
  },

  // Button patterns
  button: {
    // Botão principal
    primary: {
      alignSelf: 'stretch' as const,
      backgroundColor: '#9E56FF', // rgba(158, 86, 255, 1)
      borderRadius: 100, // totalmente arredondado
      paddingHorizontal: 16,
      paddingVertical: 20,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      shadowColor: 'rgba(45, 37, 55, 0.14)',
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 30,
    },

    // Botão de link
    link: {
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      gap: 6,
    },

    // Texto do link
    linkText: {
      color: '#9E56FF', // rgba(158, 86, 255, 1)
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '600' as const,
      lineHeight: 20,
    },
  },

  // Typography patterns
  typography: {
    // Título principal
    title: {
      alignSelf: 'stretch' as const,
      color: '#FFFFFF',
      fontSize: 32,
      fontFamily: 'Inter',
      fontWeight: '600' as const,
      lineHeight: 38,
      textAlign: 'center' as const,
    },

    // Subtítulo
    subtitle: {
      alignSelf: 'stretch' as const,
      color: '#E6E6E6', // rgba(230, 230, 230, 1)
      fontSize: 16,
      fontFamily: 'Inter',
      fontWeight: '400' as const,
      lineHeight: 24,
      textAlign: 'center' as const,
    },

    // Texto do corpo
    body: {
      color: '#E6E6E6', // rgba(230, 230, 230, 1)
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '400' as const,
      lineHeight: 20,
    },
  },

  // Common spacing values from Figma
  spacing: {
    // Gaps principais
    section: 32, // gap entre seções principais
    form: 24, // gap na seção de formulário
    input: 20, // gap entre inputs
    text: 4, // gap entre título e subtítulo
    link: 4, // gap entre textos de link
    inputField: 8, // gap interno dos inputs (para passwords dots)

    // Paddings
    screenHorizontal: 32, // padding lateral das telas
    inputPadding: 12, // padding dos inputs
    buttonHorizontal: 16, // padding horizontal dos botões
    buttonVertical: 20, // padding vertical dos botões

    // Posicionamentos
    inputTop: 32, // posição do input dentro do container
    inputHeight: 80, // altura total do campo de input
    labelHeight: 24, // altura do label
  },

  // Cores principais do design
  colors: {
    background: '#080808', // rgba(8, 8, 8, 1)
    inputBackground: '#1D1D1D', // rgba(29, 29, 29, 1)
    inputBorder: '#979797', // rgba(151, 151, 151, 1)
    primary: '#9E56FF', // rgba(158, 86, 255, 1)
    white: '#FFFFFF',
    textPrimary: '#FFFFFF',
    textSecondary: '#E6E6E6', // rgba(230, 230, 230, 1)
    textLabel: 'rgba(255, 255, 255, 0.87)',
    placeholder: '#535353', // rgba(83, 83, 83, 1)
    shadow: 'rgba(45, 37, 55, 0.14)',
  },
} as const;

export type LayoutKeys = keyof typeof layout;
