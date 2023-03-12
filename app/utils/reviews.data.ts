
export interface IReviewItem {
  name: string
  text: string
  imageUrl?: string
}

export const reviews: IReviewItem[] = [{
  name: "Валентина Альберто",
  text: `Разработка платформы для онлайн-записи. 
  Проект сделали в срок. Очень удобно, что были на связи с командой практически всегда, и было видно, над чем именно ведётся работа. 
  Не всегда получалось тестировать результат каждую неделю, но конечная программа работает точно и по заданию`
}, {name: "para_noah", text:`Разрабокта приложения для анализа данных
Понравилось, что команда разработки быстро нашла нестандартное решение.
Пути реализации выбирали сами, почти не пришлось вмешиваться в процесс. Уже на этапе тестирования выявили недочеты, но быстро их исправили. Уложились в срок договора. Буду рекомендовать как ответственных подрядчиков`}]