const SslFaqData = [
    {
      id: 1,
      faqQue: `How do SSL certificates operate?`,
      faqAns: `SSL works by making sure that any information passed between users and websites, or between two systems, can never be read. Data in transit is encrypted using algorithms to prevent hackers from accessing it as it travels over the connection.`,
    },
    {
      id: 2,
      faqQue: `Why is an SSL certificate necessary?`,
      faqAns: `For a website to be trusted by both users and search engines, it must have an SSL certificate to guarantee its security, validity, and compliance.`,
    },
    {
      id: 3,
      faqQue: `Is it possible to utilize an SSL certificate on several servers?`,
      faqAns: `Multiple servers can use the same SSL certificate by using SSL certificate chaining, which can simplify certificate management and cut costs. The intermediate certificate must be correctly installed on all servers that will use it, though, so take care to do this. In addition, it's possible that some web browsers won't work properly if you try to chain SSL certificates or that you need to make additional configurations.`,
    },
    {
        id: 4,
        faqQue: `What occurs when an SSL certificate runs out of time?`,
        faqAns: `The browser will notify users who attempt to access the website when an SSL (Secure Sockets Layer) certificate expires. Depending on the browser being used, the precise message displayed might differ but it will normally indicate that the connection is not secure and that the website's certificate has expired.`,
      },
      {
        id: 5,
        faqQue: `How do you get an SSL certificate?`,
        faqAns: `Madpopo is offering SSL certificates for open-source projects which are valid for a year. They have three options available - QuickSSL Premium, True BusinessID Wildcard, and True BusinessID with EV. QuickSSL Premium is the most affordable option at ₹399 per year and is recommended for beginners. True BusinessID Wildcard is priced at ₹499 per year and is a good choice for personal websites. Finally, True BusinessID with EV costs ₹699 per year and is suitable for small businesses. The choice of SSL certificate will depend on the specific needs of the project or website, and Madpopo's offerings provide a range of options to choose from.`,
      },
  ];
  
  export default SslFaqData;