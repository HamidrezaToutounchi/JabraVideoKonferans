import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Jabra Video Konferans Türkiye",
  description: "Tescom Telekomünikasyon ve İletişim Hizmetleri San. Tic. Ltd. Şti. Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni.",
};

export default function KvkkPage() {
  const domain = "jabravideokonferans.com";
  const phone = "0850 850 08 55";

  return (
    <div className="py-12 sm:py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <div className="flex items-center gap-2.5 text-amber-600 mb-2">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-black uppercase tracking-wider">Hukuki Bilgilendirme</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              TESCOM TELEKOMÜNİKASYON VE İLETİŞİM HİZ. SAN. TİC. LTD. ŞTİ.
            </h1>
            <p className="text-base sm:text-lg font-bold text-amber-700 mt-1">
              KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Son güncelleme: 03.11.2026 – Sürüm v1
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">1. Veri Sorumlusu</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;Kanun&quot;) uyarınca, <strong>{domain}</strong> internet sitesi üzerinden toplanan kişisel verileriniz, veri sorumlusu sıfatıyla Tescom Telekomünikasyon ve İletişim Hizmetleri Sanayi Ticaret Limited Şirketi (&quot;Tescom&quot;) tarafından aşağıda açıklanan kapsamda işlenmektedir.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1 text-slate-700">
              <p><strong>Adres:</strong> Barbaros Hayrettin Paşa Mah. Şehitler Cad. Gümüş Residence No: 8 Daire: 323 Esenyurt / İSTANBUL</p>
              <p><strong>Telefon:</strong> {phone}</p>
              <p><strong>KEP:</strong> tescomtelekom@hs03.kep.tr</p>
              <p><strong>E-posta:</strong> destek@tescom.com.tr</p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">2. İşlenen Kişisel Veriler</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li><strong>Kimlik ve iletişim:</strong> Ad soyad, kurumsal e-posta adresi, telefon numarası</li>
              <li><strong>Kurum bilgisi:</strong> Firma / kurum adı</li>
              <li><strong>Talep bilgisi:</strong> Talep türü, ilgilenilen ürün ve adetler, proje adı, mesaj içeriği</li>
              <li><strong>İşlem güvenliği:</strong> IP adresi, tarayıcı bilgisi (user-agent), işlem tarihi ve saati, bot doğrulama sonucu</li>
              <li><strong>Onay kayıtları:</strong> Aydınlatma metninin görüntülendiği ve varsa ticari ileti onayının verildiği tarih ve sürüm bilgisi</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>Bilgi, fiyat teklifi, proje kaydı ve demo taleplerinizin alınması, değerlendirilmesi ve size dönüş yapılması</li>
              <li>Satış öncesi ve satış sonrası teknik destek süreçlerinin yürütülmesi</li>
              <li>Talep ve teklif süreçlerinin kayıt altına alınması ve takibi</li>
              <li>İnternet sitesinin ve form altyapısının güvenliğinin sağlanması, otomatik (bot) ve kötü niyetli kullanımın engellenmesi</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi ve olası uyuşmazlıklarda delil olarak kullanılması</li>
              <li>Yalnızca ayrıca onay vermeniz halinde: Ürün, kampanya ve duyurular hakkında ticari elektronik ileti gönderilmesi</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">4. Toplama Yöntemi ve Hukuki Sebepler</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Kişisel verileriniz, internet sitemizdeki talep formu aracılığıyla elektronik ortamda, otomatik yollarla toplanmaktadır. Verileriniz Kanun&apos;un 5. maddesinin 2. fıkrasında yer alan;
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>(c) Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması kaydıyla sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması,</li>
              <li>(ç) Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,</li>
              <li>(e) Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,</li>
              <li>(f) İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              hukuki sebeplerine dayanılarak işlenmektedir. Ticari elektronik ileti gönderimi ise yalnızca 6563 sayılı Kanun kapsamında vereceğiniz onaya dayanır ve bu onay isteğe bağlıdır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">5. Kişisel Verilerin Aktarılması</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Kişisel verileriniz yukarıdaki amaçlarla sınırlı olarak; talebinizin karşılanması için Tescom bünyesindeki yetkili satış ve teknik destek çalışanlarına, hizmet aldığımız e-posta altyapı sağlayıcısına (yurt içi), form güvenliği ve bot koruması amacıyla Cloudflare, Inc.&apos;e (ABD) yalnızca teknik doğrulama verisi (IP adresi, tarayıcı bilgisi), ve talep halinde yetkili kamu kurum ve kuruluşlarına aktarılabilecektir. Yurt dışına yapılan aktarımlar Kanun&apos;un 9. maddesinde öngörülen usul ve güvencelere uygun olarak gerçekleştirilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">6. Saklama Süresi</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Form aracılığıyla iletilen veriler, talebinizin sonuçlanmasından itibaren 2 (iki) yıl; ticari ilişki kurulması halinde ilgili mevzuatta öngörülen süreler boyunca saklanır. IP adresi ve tarayıcı bilgisi gibi işlem güvenliği verileri 1 (bir) yıl süreyle saklanır. Süre sonunda verileriniz silinir, yok edilir veya anonim hale getirilir. Verileriniz Tescom&apos;un Türkiye&apos;de bulunan sunucularında, erişimi yetkili personelle sınırlandırılmış şekilde tutulur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">7. Çerezler</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>{domain}</strong> ziyaretçi takibi veya reklam amaçlı çerez kullanmaz. Form güvenliği için Cloudflare Turnstile doğrulaması çalıştırılır; bu doğrulama yalnızca bot tespiti amacıyla kullanılır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">8. Kanun&apos;un 11. Maddesi Kapsamındaki Haklarınız</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">Veri sahibi olarak;</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>a) Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>b) İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>c) İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>ç) Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>d) Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>e) Kanun&apos;un 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme,</li>
              <li>f) (d) ve (e) bentleri uyarınca yapılan işlemlerin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>ğ) Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">haklarına sahipsiniz.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">9. Başvuru Yöntemi</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e uygun olarak;
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>Yukarıdaki adrese ıslak imzalı dilekçe ile şahsen veya noter aracılığıyla,</li>
              <li><strong>tescomtelekom@hs03.kep.tr</strong> adresine kayıtlı elektronik posta ile güvenli elektronik imza veya mobil imza kullanarak,</li>
              <li>Daha önce Tescom&apos;a bildirdiğiniz ve sistemimizde kayıtlı bulunan e-posta adresinizden <strong>destek@tescom.com.tr</strong> adresine</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              iletebilirsiniz. Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarife uygulanabilir.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-1">
            <p className="font-bold text-slate-800">TESCOM TELEKOMÜNİKASYON VE İLETİŞİM HİZ. SAN. TİC. LTD. ŞTİ.</p>
            <p>Adres: Barbaros Hayrettin Paşa Mah. Şehitler Cad. Gümüş Residence No: 8 Daire: 323 Esenyurt / İSTANBUL</p>
            <p>Tel: {phone} | KEP: tescomtelekom@hs03.kep.tr | E-posta: destek@tescom.com.tr</p>
          </div>
        </div>
      </div>
    </div>
  );
}