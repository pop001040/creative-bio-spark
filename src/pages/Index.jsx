import { Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Right Side - Personal Info */}
          <div className="w-full md:w-2/5 bg-gray-700 text-white p-6 space-y-6">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=300"
                  alt="الصورة الشخصية"
                  className="w-full h-full object-cover animate-image-float"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">عمر محمد عابدين</h1>
              <p className="text-gray-300">Full Stack Developer</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-gray-500 pb-2">معلومات شخصية</h2>
              <p>متخرج من كلية الاقتصاد وإدارة الأعمال</p>
              <p>حاصل على شهادة Full Stack Developer</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-gray-500 pb-2">المهارات التقنية</h2>
              <p>تطوير الواجهة الأمامية</p>
              <p>تطوير الخلفية</p>
              <p>قواعد البيانات</p>
              <p>إدارة المشاريع</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-gray-500 pb-2">التواصل</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+966 5XX XXX XXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>المملكة العربية السعودية</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>omar.abdin@example.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side - Experience & Education */}
          <div className="w-full md:w-3/5 p-6 space-y-6" dir="rtl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">نبذة عني</h2>
              <p className="text-gray-600">
                مطور ويب متكامل مع خبرة في تطوير المواقع والتطبيقات. متخرج من كلية الاقتصاد وإدارة الأعمال، وحاصل على شهادة Full Stack Developer. أعمل حالياً في شركة جرين لايت كمطور مواقع ويب.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">الخبرات العملية</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">شركة جرين لايت</h3>
                  <p className="text-gray-500">2023 - الحالي</p>
                  <p>مطور مواقع ويب</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>تطوير وصيانة تطبيقات الويب</li>
                    <li>العمل مع فريق متعدد التخصصات</li>
                    <li>تحسين أداء المواقع</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">التعليم</h2>
              <div>
                <h3 className="font-semibold">بكالوريوس اقتصاد وإدارة أعمال</h3>
                <p className="text-gray-500">الجامعة السعودية</p>
              </div>
              <div>
                <h3 className="font-semibold">شهادة Full Stack Developer</h3>
                <p className="text-gray-500">أكاديمية البرمجة</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">المهارات التقنية</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React.js, Node.js</li>
                <li>SQL, MongoDB</li>
                <li>Git, GitHub</li>
                <li>تطوير واجهات المستخدم</li>
                <li>تطوير واجهات برمجة التطبيقات</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;