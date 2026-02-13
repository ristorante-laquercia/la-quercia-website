import Lineicons from "@lineiconshq/react-lineicons";
import { HeartOutlined } from "@lineiconshq/free-icons";

import { Container } from "@/components/ui/container";

export function SubFooter() {
  return (
    <div className="col-span-12 bg-background">
      <Container className="py-6 grid-cols-subgrid gap-y-4 grid text-sm text-center">
        <div className="col-span-12 space-y-2">
          <div>
            {new Date().getFullYear()} All Right Reserved
            <br /> MPM di Iuliano Tiziana - Via Elba, 1 - Termoli (CB) <br />
            Partita IVA:IT01516690706
          </div>
          <div>Privacy & Cookie Policy</div>
        </div>

        <div className="col-span-12 flex items-center justify-center gap-x-1 text-xs">
          Made with <Lineicons icon={HeartOutlined} size={12} color="white" />{" "}
          in a{" "}
          <a href="https://www.creactiveroom.it" target="_blank">
            Creactive | Room
          </a>
        </div>
      </Container>
    </div>
  );
}
