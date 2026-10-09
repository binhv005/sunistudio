import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Calendar, Users, MessageSquare } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';

export default function LeadForm() {
  const { formSection } = tourData;
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    branch: '',
    shootDate: '',
    service: 'Chụp ảnh em bé',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9+ ]{9,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.branch) errs.branch = 'Vui lòng chọn cơ sở';
    if (!formData.shootDate) errs.shootDate = 'Vui lòng chọn ngày chụp dự kiến';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="booking" className="py-8 sm:py-10 md:py-12 bg-amber-100 text-ink-950 relative overflow-hidden">
      <Decor tone="peach" variant="b" flipX />
      {/* Background Subtle Accent */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center mb-4 sm:mb-6">
          <p className="font-handwriting text-2xl sm:text-3xl text-amber-600 font-semibold mb-0.5 sm:mb-1">
            {formSection.cursiveHeader}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-ink-950 tracking-tight mb-1.5">
            {formSection.heading}
          </h2>
          <p className="text-xs sm:text-sm text-ink-800/80 max-w-xl mx-auto">
            {formSection.subheading}
          </p>
        </ScrollReveal>

        {/* Main 50/50 Split Card (Light/White Theme, No Rounded Corners) */}
        <div className="bg-white text-ink-950 border border-ink-100 shadow-card rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* Left Column: 50% Image (absolute positioned to prevent grid height expansion) */}
          <ScrollReveal direction="left" duration={650} className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden group">
            <div className="absolute inset-0">
              <img
                src={formSection.image}
                alt={formSection.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-10">
              <h4 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug drop-shadow-md">
                {formSection.imageTitle}
              </h4>
              <p className="text-xs text-cream-200/90 font-light mt-0.5 max-w-md">
                {formSection.imageText}
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: 50% Form (Light Theme) */}
          <ScrollReveal direction="right" delay={150} duration={650} className="p-5 sm:p-6 lg:p-7 flex flex-col justify-start bg-white">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink-950">
                  Gửi Thông Tin Thành Công!
                </h3>
                <p className="text-ink-700 text-sm max-w-md mx-auto">
                  Cảm ơn bạn đã quan tâm. Đội ngũ Suni Studio sẽ liên hệ lại qua số điện thoại <span className="font-bold text-amber-600">{formData.phone}</span> trong thời gian sớm nhất!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      branch: '',
                      shootDate: '',
                      service: 'Chụp ảnh em bé',
                      notes: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-ink-100 hover:bg-ink-200 text-ink-900 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5" noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">

                  {/* Họ và tên */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-ink-50/60 border ${errors.fullName ? 'border-red-400' : 'border-ink-200/80'
                        } text-ink-950 placeholder-ink-700/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    />
                    {errors.fullName && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ví dụ: 0366 676 766"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-ink-50/60 border ${errors.phone ? 'border-red-400' : 'border-ink-200/80'
                        } text-ink-950 placeholder-ink-700/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    />
                    {errors.phone && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">

                  {/* Cơ sở mong muốn */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Cơ sở mong muốn *
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-ink-50/60 border ${errors.branch ? 'border-red-400' : 'border-ink-200/80'
                        } text-ink-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    >
                      <option value="">Chọn cơ sở</option>
                      {tourData.branches.map((b) => (
                        <option key={b.name} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                    {errors.branch && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.branch}
                      </span>
                    )}
                  </div>

                  {/* Ngày chụp dự kiến */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Ngày chụp dự kiến *
                    </label>
                    <input
                      type="date"
                      value={formData.shootDate}
                      onChange={(e) => setFormData({ ...formData, shootDate: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-ink-50/60 border ${errors.shootDate ? 'border-red-400' : 'border-ink-200/80'
                        } text-ink-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    >
                    </input>
                    {errors.shootDate && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.shootDate}
                      </span>
                    )}
                  </div>

                </div>

                {/* Dịch vụ quan tâm */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-ink-50/60 border border-ink-200/80 text-ink-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all"
                  >
                    <option value="Chụp ảnh em bé">Chụp ảnh em bé</option>
                    <option value="Chụp ảnh gia đình">Chụp ảnh gia đình</option>
                    <option value="Chụp ảnh newborn">Chụp ảnh newborn</option>
                    <option value="Cần tư vấn thêm">Cần tư vấn thêm</option>
                  </select>
                </div>

                {/* Ghi chú */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                    Ghi chú
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Mong muốn về concept, số người tham gia, thời gian chụp..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-ink-50/60 border border-ink-200/80 text-ink-950 placeholder-ink-700/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-1.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{formSection.cta}</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Hotline note */}
                <div className="text-center pt-0.5">
                  <a
                    href={`tel:${tourData.hotline}`}
                    className="inline-flex items-center gap-2 text-xs text-ink-700 hover:text-amber-600 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>{formSection.hotlineText}</span>
                  </a>
                </div>

              </form>
            )}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
