import Header from "../components/Header";

import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Weather App",
  description:
    "A weather app project for IST 363 for practicing React and API calls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
