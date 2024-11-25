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
                  src="/lovable-uploads/cb1b5cf5-6e45-434e-ba8d-cdd148ac25f3.png"
                  alt="الصورة الشخصية"
                  className="w-full h-full object-cover animate-image-float"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">شيماء طاهر</h1>
              <p className="text-gray-300">مديرة مبيعات طبية</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-gray-500 pb-2">تاريخ الميلاد</h2>
              <p>25 يناير 1997</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-gray-500 pb-2">المهارات</h2>
              <p>فن التسويق</p>
              <p>التخطيط</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-gray-500 pb-2">التواصل</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>123-456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>123 Anywhere St., Any City</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>hello@reallygreatsite.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side - Experience & Education */}
          <div className="w-full md:w-3/5 p-6 space-y-6" dir="rtl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">نبذة عني</h2>
              <p className="text-gray-600">
                مديرة مبيعات طبية اعمل في المجال منذ عدة سنوات. اعمل على التخطيط على علاقات العملاء من المستشفيات والأطباء.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">الخبرات العملية</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">شركة الدواء</h3>
                  <p className="text-gray-500">2020 - 2021</p>
                  <p>مندوب مبيعات طبي أول</p>
                </div>
                <div>
                  <h3 className="font-semibold">شركة الشفاء</h3>
                  <p className="text-gray-500">2021 - 2026</p>
                  <p>مندوب مبيعات طبي أول</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">التعليم</h2>
              <div>
                <h3 className="font-semibold">جامعة القاهرة</h3>
                <p className="text-gray-500">بكالوريوس تكنولوجيا طبية، تخرج 2020</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700 border-b border-gray-200 pb-2">المهارات ذات الصلة</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>معرفة مستجدات السوق الدوائي الحالي</li>
                <li>خلفية في التكنولوجيا الطبية</li>
                <li>التواصل الفعال</li>
                <li>المهارات التنظيمية وإدارة الوقت</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;