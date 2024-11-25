import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* الشريط العلوي */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">السيرة الذاتية</h1>
          <div className="flex gap-4">
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">
              تواصل معي
            </a>
            <a href="#skills" className="text-secondary hover:text-primary transition-colors">
              المهارات
            </a>
            <a href="#experience" className="text-secondary hover:text-primary transition-colors">
              الخبرات
            </a>
          </div>
        </div>
      </nav>

      {/* القسم الرئيسي */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="text-center mb-16 section">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <img
              src="/placeholder.svg"
              alt="الصورة الشخصية"
              className="rounded-full shadow-lg animate-image-float"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">اسمك هنا</h1>
          <p className="text-xl text-secondary mb-6">مطور ويب</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-blue-600 transition-colors"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-blue-600 transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* قسم نبذة عني */}
        <section className="mb-16 section section-delay-1">
          <h2 className="text-2xl font-bold mb-6 text-center">نبذة عني</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            مطور ويب متحمس مع خبرة في تطوير تطبيقات الويب الحديثة. أسعى دائماً لتعلم التقنيات الجديدة وتطبيق أفضل الممارسات في مجال تطوير الويب.
          </p>
        </section>

        {/* قسم المهارات */}
        <section id="skills" className="mb-16 section section-delay-2">
          <h2 className="text-2xl font-bold mb-6 text-center">المهارات</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript"].map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* قسم الخبرات */}
        <section id="experience" className="mb-16 section section-delay-3">
          <h2 className="text-2xl font-bold mb-6 text-center">الخبرات</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">مطور واجهات أمامية</h3>
              <p className="text-secondary mb-2">شركة التقنية المتقدمة • 2020 - الحالي</p>
              <p>تطوير وصيانة تطبيقات الويب باستخدام React وTypeScript.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">مطور ويب مستقل</h3>
              <p className="text-secondary mb-2">2018 - 2020</p>
              <p>تطوير مواقع ويب مخصصة للعملاء باستخدام تقنيات الويب الحديثة.</p>
            </div>
          </div>
        </section>

        {/* قسم التواصل */}
        <section id="contact" className="section section-delay-3">
          <h2 className="text-2xl font-bold mb-6 text-center">تواصل معي</h2>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:example@example.com"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <MailIcon className="w-5 h-5" />
              example@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              +123 456 7890
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;