import {
  GameIconsDodo,
  GrommetIconsStripe,
  LogosPaypal,
} from "@/components/icons";
import Navbar from "@/components/navbar";
import YouTubeEmbed from "@/components/youtube-embed";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const providers = [
    {
      name: "Stripe",
      icon: <GrommetIconsStripe className="text-blue-500 size-7 shrink-0" />,
      description:
        "Stripe is one of the most powerful and developer-friendly payment platforms in the world. It gives businesses the ability to accept online payments, subscriptions, invoices, and global transactions with a modern API and enterprise-level infrastructure.",
      features: [
        "Global payments support",
        "Subscriptions & recurring billing",
        "Powerful APIs for developers",
        "Apple Pay & Google Pay support",
        "Advanced fraud protection",
      ],
    },
    {
      name: "PayPal",
      icon: <LogosPaypal className="text-blue-400 size-7 shrink-0" />,
      description:
        "PayPal is one of the most trusted online payment systems globally. Millions of users already have PayPal accounts, making checkout faster and more familiar for customers while giving businesses a secure way to receive payments.",
      features: [
        "Trusted worldwide brand",
        "Fast checkout experience",
        "Supports cards & PayPal balance",
        "Buyer & seller protection",
        "Easy integration for websites",
      ],
    },
    {
      name: "Dodo Payments",
      icon: <GameIconsDodo className="text-lime-300 size-7 shrink-0" />,
      description:
        "Dodo Payments is a modern Merchant of Record platform designed for SaaS, indie hackers, and digital businesses. It handles taxes, invoices, compliance, and global payments so developers can focus on building products instead of legal complexity.",
      features: [
        "Handles VAT & global taxes",
        "Built for SaaS businesses",
        "Subscription management",
        "Simple developer integration",
        "No Stripe account required",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background p-6">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col gap-6 mt-5" id="home">
        {/* Hero */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold font-code-pro tracking-tight">
            Let&apos;s Talk About Payment Gateways.
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Payment gateways allow businesses to securely accept online payments
            from customers using credit cards, wallets, subscriptions, and
            digital banking systems.
          </p>
        </div>

        {/* Main Intro Card */}
        <Card className="bg-background border-border/60 shadow-sm ">
          <CardHeader className="space-y-3">
            <CardTitle className="text-3xl">
              What is a Payment Gateway?
            </CardTitle>

            <CardDescription className="text-lg leading-relaxed">
              A payment gateway is a technology that securely authorizes and
              processes payments between customers and businesses. It encrypts
              payment data, connects with banks, verifies transactions, and
              ensures money moves safely from the customer to the merchant.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Providers */}
        <div className="space-y-4" id="providers">
          <div>
            <h2 className="text-2xl font-bold font-code-pro">
              Best Payment Gateway Providers
            </h2>

            <p className="text-muted-foreground text-lg mt-1">
              Here are some of the most popular payment solutions used by modern
              startups, SaaS platforms, and online businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {providers.map((provider) => (
              <Card
                key={provider.name}
                className="bg-background border-border/60 hover:border-primary/40 transition-all duration-300 "
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    {provider.icon}

                    <CardTitle className="text-2xl font-code-pro">
                      {provider.name}
                    </CardTitle>
                  </div>

                  <CardDescription className="text-base leading-relaxed">
                    {provider.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Key Features</h3>

                    <ul className="space-y-2">
                      {provider.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <div className="size-2 rounded-full bg-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Stripe Highlight Section */}
          <Card className="bg-background border-border/60 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className=" p-3 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <GrommetIconsStripe className="text-blue-500 size-8" />

                  <span className="px-3 py-1 rounded-sm bg-blue-500/10 text-blue-500 text-sm font-medium">
                    Most Popular Choice
                  </span>
                </div>

                <div className="space-y-3" id="stripe">
                  <h2 className="text-4xl font-bold font-code-pro leading-tight">
                    Why Stripe is the Best Payment Gateway for Developers
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Stripe has become the industry standard for modern startups,
                    SaaS platforms, AI tools, and global online businesses
                    because of its powerful APIs, world-class infrastructure,
                    and excellent developer experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Developer Friendly APIs
                      </h3>

                      <p className="text-muted-foreground">
                        Stripe provides clean and modern APIs that are easy to
                        integrate with frameworks like Next.js, Hono, React,
                        Node.js, and mobile applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Built for Subscriptions
                      </h3>

                      <p className="text-muted-foreground">
                        Perfect for SaaS businesses with recurring payments,
                        invoices, free trials, coupons, and advanced billing
                        systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Trusted by Global Companies
                      </h3>

                      <p className="text-muted-foreground">
                        Companies like OpenAI, Shopify, Amazon, Slack, and
                        thousands of startups use Stripe to process billions of
                        dollars in payments.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Advanced Security & Fraud Protection
                      </h3>

                      <p className="text-muted-foreground">
                        Stripe includes enterprise-level security, fraud
                        detection, PCI compliance, and global payment
                        reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="h-full min-h-100 border-l border-border/50 flex items-center justify-center p-8">
                <div className="max-w-md space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="size-16 rounded-sm bg-blue-500/10 flex items-center justify-center">
                      <GrommetIconsStripe className="text-blue-500 size-9" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold font-code-pro">
                        Stripe
                      </h3>

                      <p className="text-muted-foreground">
                        The Internet&apos;s Financial Infrastructure
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Stripe is designed to help developers and businesses
                      launch products faster with scalable payment systems and
                      modern financial tools.
                    </p>

                    <p>
                      Whether you are building a startup, LMS platform, AI SaaS
                      product, or global marketplace, Stripe gives you
                      everything needed to handle online payments
                      professionally.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-xl border border-border/60 p-4">
                      <h4 className="text-2xl font-bold">135+</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Supported Currencies
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/60 p-4">
                      <h4 className="text-2xl font-bold">Millions</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Businesses Using Stripe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-evenly px-3 py-5">
              <div className="w-full lg:w-135">
                <YouTubeEmbed
                  src="https://www.youtube.com/embed/mp2n4m22AqQ?si=TIccSwUZRdwbZbHU"
                  title="Stripe video 1"
                />
              </div>

              <div className="w-full lg:w-135">
                <YouTubeEmbed
                  src="https://www.youtube.com/embed/JEtALC2t5dY?si=GEk-D6Rx2n2sc6Pe"
                  title="Stripe video 2"
                />
              </div>
            </div>
          </Card>

          {/* Stripe Requirements Section */}
          <Card className="bg-background border-border/60 shadow-sm">
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <div>
                  <CardTitle className="text-3xl">
                    What Do You Need to Open a Stripe Account?
                  </CardTitle>

                  <CardDescription className="text-lg mt-1">
                    Stripe requires identity verification and business
                    information before you can start accepting payments.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-sm border border-border/60 p-5 space-y-4">
                  <h3 className="text-2xl font-bold font-code-pro">
                    Personal Requirements
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Government ID</h4>

                      <p className="text-muted-foreground">
                        Passport, national ID card, or driver license for
                        identity verification.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">Legal Full Name</h4>

                      <p className="text-muted-foreground">
                        Your real legal name matching your documents and bank
                        account.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">
                        Email & Phone Number
                      </h4>

                      <p className="text-muted-foreground">
                        Used for account security, login, and verification.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">Bank Account</h4>

                      <p className="text-muted-foreground">
                        A supported bank account where Stripe can send your
                        payouts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-sm border border-border/60 p-5 space-y-4">
                  <h3 className="text-2xl font-bold font-code-pro">
                    Business Requirements
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Business Website
                      </h4>

                      <p className="text-muted-foreground">
                        Stripe usually reviews your website, SaaS platform,
                        store, or app before fully activating payments.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">
                        Business Description
                      </h4>

                      <p className="text-muted-foreground">
                        You must explain what your company or product does.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">
                        Business Address
                      </h4>

                      <p className="text-muted-foreground">
                        Required for invoices, taxes, and compliance
                        verification.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">
                        LLC or Registered Company
                      </h4>

                      <p className="text-muted-foreground">
                        In many cases, having an LLC or registered business
                        increases trust and reduces account limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-evenly px-3 py-5">
                <div className="w-full lg:w-135">
                  <YouTubeEmbed
                    src="https://www.youtube.com/embed/EXAjAn-1_Xk?si=7-X67YVwAynfz4WA"
                    title="Stripe requirements 1"
                  />
                </div>

                <div className="w-full lg:w-135">
                  <YouTubeEmbed
                    src="https://www.youtube.com/embed/IlRgNpVeiPw?si=vetuWN4Pp9UL7-IM"
                    title="Stripe requirements 2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LLC Section */}
          <Card className="bg-background border-border/60 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side */}
              <div className="p-8 space-y-5" id="llc">
                <div className="space-y-4">
                  <span className="px-3 py-1  bg-primary/10 text-primary text-sm font-medium rounded-sm  ">
                    Business & Legal
                  </span>

                  <h2 className="text-4xl font-bold font-code-pro leading-tight mt-4">
                    What is an LLC Company?
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    LLC stands for Limited Liability Company. It is a legal
                    business structure used by startups, SaaS founders,
                    freelancers, and online businesses to operate professionally
                    and legally.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Protects Your Personal Assets
                      </h3>

                      <p className="text-muted-foreground">
                        An LLC separates your personal finances from your
                        business, helping protect you legally.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Helps Open Payment Gateways
                      </h3>

                      <p className="text-muted-foreground">
                        Many payment providers like Stripe trust registered
                        businesses more than personal accounts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Makes Your Business Look Professional
                      </h3>

                      <p className="text-muted-foreground">
                        Clients, investors, and customers usually trust
                        registered companies more than individuals.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-lg">
                        Required for Some Platforms
                      </h3>

                      <p className="text-muted-foreground">
                        Some banks, payment processors, and marketplaces may
                        require a registered company for verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="h-full min-h-105 border-l border-border/50  p-1 flex items-center justify-center">
                <div className=" space-y-6">
                  <div className="rounded-sm border border-border/60 bg-background/60 backdrop-blur p-4 space-y-5">
                    <div>
                      <h3 className="text-3xl font-bold font-code-pro">
                        What You Usually Get With an LLC
                      </h3>

                      <p className="text-muted-foreground mt-2">
                        After registering your LLC company, you normally
                        receive:
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-xl border border-border/60 p-4">
                        <h4 className="font-semibold">
                          Business Registration Document
                        </h4>

                        <p className="text-sm text-muted-foreground mt-1">
                          Official proof that your company legally exists.
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/60 p-4">
                        <h4 className="font-semibold">EIN Number</h4>

                        <p className="text-sm text-muted-foreground mt-1">
                          A business tax ID used for banking and payment
                          providers.
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/60 p-4">
                        <h4 className="font-semibold">Business Bank Account</h4>

                        <p className="text-sm text-muted-foreground mt-1">
                          Used to receive payouts from Stripe and other
                          gateways.
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/60 p-4">
                        <h4 className="font-semibold">
                          Professional Business Identity
                        </h4>

                        <p className="text-sm text-muted-foreground mt-1">
                          Helps your startup operate like a real global company.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-center justify-evenly px-3 py-5">
              <div className="w-full lg:w-135">
                <YouTubeEmbed
                  src="https://www.youtube.com/embed/XqO5RRerleg?si=MOfJZ5Q9holIlSH8"
                  title="LLC video 1"
                />
              </div>

              <div className="w-full lg:w-135">
                <YouTubeEmbed
                  src="https://www.youtube.com/embed/HI-NjzZHGIQ?si=6e4CQxG4e7sEBpiX"
                  title="LLC video 2"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full border-t border-border/60 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-3">
          <div>
            <h3 className="font-code-pro font-bold text-lg">
              © 2026 All Rights Reserved to Imran Ahmed
            </h3>

            <p className="text-muted-foreground">
              Built with passion for developers, startups, and SaaS founders.
            </p>
          </div>

          <a
            href="https://imrandv.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium text-lg"
          >
            imrandv.vercel.app
          </a>
        </div>
      </footer>
    </div>
  );
}
