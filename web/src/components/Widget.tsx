import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
//estado ==> variavel / grande ponto ele fica observando para quando a mudança no valor da variavel ele faça as mudanças
//setIsWidgetOpen ==> variavel de alta importancia  para mudar o valor do componete
// { algumacoisa ? <p></p> : null} == isto e uma condição denod ? si e o : se não / && so fara se a função n tiver impedimento
export function Widget() {
  return (
    <Popover className=" absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-width-xs transition-all duration-500 ease-linear">
          <span className="pl"></span>
          feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
