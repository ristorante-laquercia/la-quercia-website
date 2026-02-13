import Lineicons from "@lineiconshq/react-lineicons";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsappOutlined,
} from "@lineiconshq/free-icons";
import { SubFooter } from "./sub-footer";
import { Container } from "../ui/container";

export function Footer() {
  // TODO: sostituire con le pagine reali del sito.
  const infoLinks = [
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Menu", href: "/menu" },
    { label: "Eventi", href: "/eventi" },
    { label: "Contatti", href: "/contatti" },
  ];

  // TODO: sostituire con gli orari reali di apertura.
  const openingHours = [
    "Lun - Gio: 12:00 - 15:00 / 19:00 - 23:00",
    "Ven - Sab: 12:00 - 15:30 / 19:00 - 24:00",
    "Domenica: 12:00 - 16:00",
    "Martedì: Chiuso",
  ];

  return (
    <footer id="site-footer" className="grid grid-cols-12">
      <div className="bg-lq-green col-span-12 py-10">
        <Container className="text-center">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <h4>GOOD. Il Garden di Cagliari</h4>
            <div>
              <p>
                Via Elba, 1 <br />
                Telefono: +39 0875.707211 <br />
                Mobile: +39 379.1269699
                <br />
                e-mail:{" "}
                <a href="info@ristorante-laquercia.it" target="_blank">
                  info@ristorante-laquercia.it
                </a>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Button variant={"ghost"} asChild>
                <a
                  href="https://www.facebook.com/laquerciatermoli"
                  target="_blank"
                >
                  <Lineicons icon={FacebookOutlined} size={48} color="blue" />
                </a>
              </Button>
              <Button variant={"link"} asChild>
                <a
                  href="https://www.instagram.com/laquerciatermoli/"
                  target="_blank"
                >
                  <Lineicons icon={InstagramOutlined} size={48} color="blue" />
                </a>
              </Button>
              <Button variant={"link"} asChild>
                <a
                  href="https://wa.me/+393791269699?text=Vorrei%20ricevere%20maggiori%20informazioni"
                  target="_blank"
                >
                  <Lineicons icon={WhatsappOutlined} size={48} color="blue" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4>Informazioni</h4>
            <ul>
              {infoLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Orari di apertura</h4>
            <ul>
              {openingHours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <SubFooter />
    </footer>
  );
}
