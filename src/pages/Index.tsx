import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const handleConfirm = () => {
    const message = encodeURIComponent('Подтверждаю присутствие на юбилее 20 декабря 2025 года! 🎉');
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen gatsby-pattern overflow-x-hidden">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 animate-fade-in">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                <Icon name="Sparkles" className="text-primary" size={24} />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary tracking-wide">
                Юбилей
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/90 font-light tracking-widest">
                50 ЛЕТ
              </p>
            </div>

            <div className="my-12 relative">
              <div className="absolute -left-4 top-1/2 w-32 h-32 border-2 border-primary/30 transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute -right-4 top-1/2 w-32 h-32 border-2 border-primary/30 transform -translate-y-1/2 rotate-45"></div>
              
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-8 border-primary shadow-2xl shadow-primary/40 relative">
                <div className="absolute inset-0 gold-shimmer opacity-60"></div>
                <div className="absolute inset-0 ring-4 ring-primary/20 ring-offset-8 ring-offset-background rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/1d7aa4df-f7d4-4921-a951-5e783f6a43b1.jpeg" 
                  alt="Именинница"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-foreground/80 italic">
                Приглашаем вас разделить с нами
              </p>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                незабываемый вечер в стиле ревущих двадцатых — эпохи джаза, роскоши и безудержного веселья
              </p>
              
              <div className="max-w-3xl mx-auto pt-4">
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed italic">
                  Погрузитесь в атмосферу 1920-х годов, когда стиль и элегантность были на пике моды. 
                  Одевайтесь в лучшие наряды, ведь вечер обещает быть незабываемым!
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
              <Icon name="ChevronDown" className="text-primary animate-bounce" size={32} />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="max-w-3xl mx-auto mb-16 relative">
              <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block"></div>
              <div className="absolute -right-8 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block"></div>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                <Icon name="Book" className="text-primary" size={32} />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                В стиле Великого Гэтсби
              </h2>
              
              <div className="space-y-4 text-foreground/75 leading-relaxed">
                <p className="text-base md:text-lg italic">
                  Помните вечеринки Джея Гэтсби? Те самые, где шампанское лилось рекой, оркестр играл джаз до рассвета, 
                  а гости блистали в роскошных нарядах с пайетками и перьями.
                </p>
                <p className="text-base md:text-lg">
                  Эпоха арт-деко, золотые акценты, геометрические узоры и атмосфера безудержного праздника — 
                  именно такой вечер мы приготовили для вас!
                </p>
                <p className="text-base md:text-lg font-semibold text-primary">
                  Давайте вместе отпразднуем эту важную веху и создадим воспоминания, 
                  которые останутся с нами навсегда!
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <Icon name="MapPin" className="text-primary" size={28} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Детали события
            </h2>
          </div>

          <Card className="bg-card/60 backdrop-blur-sm border-primary/30 p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <Icon name="Calendar" className="text-primary mx-auto" size={40} />
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Дата</p>
                  <p className="font-playfair text-2xl font-semibold text-foreground">20 декабря</p>
                  <p className="text-foreground/70">2025</p>
                </div>
              </div>

              <div className="space-y-3">
                <Icon name="Clock" className="text-primary mx-auto" size={40} />
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Время</p>
                  <p className="font-playfair text-2xl font-semibold text-foreground">16:00</p>
                </div>
              </div>

              <div className="space-y-3">
                <Icon name="Home" className="text-primary mx-auto" size={40} />
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Место</p>
                  <p className="font-playfair text-xl font-semibold text-foreground">Банкетный зал</p>
                  <p className="text-foreground/70">«Буа Алан»</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <Icon name="Shirt" className="text-primary" size={28} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Дресс-код
            </h2>
            <p className="text-lg text-foreground/70 italic">Стиль 1920-х годов</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/60 backdrop-blur-sm border-2 border-primary/40 p-8 shadow-2xl shadow-primary/20 relative">
              <div className="absolute inset-0 border-8 border-transparent bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
              <div className="text-center mb-6">
                <Icon name="Sparkles" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">Для дам</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Платья с бахромой или пайетками</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Длина до колена или в пол</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Перья, ободки с декором</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Жемчуг и элегантные украшения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Туфли на каблуке</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-2 border-primary/40 p-8 shadow-2xl shadow-primary/20 relative">
              <div className="absolute inset-0 border-8 border-transparent bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
              <div className="text-center mb-6">
                <Icon name="Crown" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">Для джентльменов</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Смокинг или костюм-тройка</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Галстук-бабочка</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Жилет в тон</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Запонки и часы на цепочке</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Лакированные туфли</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <Icon name="Music" className="text-primary" size={28} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Программа вечера
            </h2>
          </div>

          <Card className="bg-card/60 backdrop-blur-sm border-2 border-primary/40 p-8 md:p-12 shadow-2xl shadow-primary/20 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              <div className="flex gap-4 items-start">
                <Icon name="Music2" className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Живая музыка</h4>
                  <p className="text-foreground/70">Джазовые мелодии эпохи Гэтсби</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Icon name="Sparkle" className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Танцы</h4>
                  <p className="text-foreground/70">Чарльстон и вальс под звёздами</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Icon name="Trophy" className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Конкурсы</h4>
                  <p className="text-foreground/70">Весёлые игры с призами</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Icon name="Wine" className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Угощения</h4>
                  <p className="text-foreground/70">Изысканные блюда и напитки</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/30 text-center">
              <p className="text-lg text-foreground/80 italic">
                И множество приятных сюрпризов!
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 relative bg-secondary/30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <Icon name="MessageCircle" className="text-primary" size={28} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Подтверждение
            </h2>
            <p className="text-foreground/70">
              Пожалуйста, подтвердите ваше присутствие
            </p>
          </div>

          <Card className="bg-card/60 backdrop-blur-sm border-2 border-primary/40 p-8 md:p-10 shadow-2xl shadow-primary/30 relative">
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/50"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/50"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/50"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/50"></div>
            <div className="text-center space-y-6">
              <p className="text-lg text-foreground/80">
                Нажмите кнопку ниже, чтобы подтвердить участие через WhatsApp
              </p>
              
              <Button 
                onClick={handleConfirm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-md shadow-lg shadow-primary/30 transition-all hover:scale-105"
              >
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Подтвердить в WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground italic pt-4">
                Будем рады видеть вас на празднике!
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-primary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <Icon name="Heart" className="text-primary" size={24} />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-playfair text-2xl text-primary mb-2">До встречи!</p>
          <p className="text-foreground/60">С уважением и любовью</p>
        </div>
      </footer>
    </div>
  );
}