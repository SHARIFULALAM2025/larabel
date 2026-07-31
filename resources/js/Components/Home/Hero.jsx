import {
    FaArrowRight,
    FaAward,
    FaHeadphones,
    FaInfinity,
    FaPlay,
    FaUndo,
    FaMobileAlt,
    FaStar,
} from "react-icons/fa";
import PrimaryButton from "../PrimaryButton";

export default function Hero() {
    return (
        <section className="relative bg-background text-foreground overflow-hidden">
            <div className="relative  ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-8 sm:py-10 lg:py-0 lg:min-h-[calc(100vh-4rem)]">
                    {/* Left Content */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1">
                        {/* Heading */}
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight text-foreground">
                            দক্ষতা অর্জন করো, <br className="hidden sm:block" />
                            <span className="text-primary">
                                স্বপ্নের ক্যারিয়ার গড়ো
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            বিশেষজ্ঞ শিক্ষকদের সাথে বাংলায় শেখো প্রোগ্রামিং,
                            ডিজাইন, ব্যবসা ও আরও অনেক কিছু। যেকোনো ডিভাইসে,
                            যেকোনো সময়।
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
                            <PrimaryButton
                                href="/accademy"
                                className="flex items-center gap-2 text-sm sm:text-base"
                            >
                                কোর্স দেখুন
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </PrimaryButton>

                            <PrimaryButton className="flex items-center gap-2 text-sm sm:text-base">
                                <FaPlay className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                ফ্রি ডেমো
                            </PrimaryButton>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-6 sm:pt-8 border-t border-border">
                            <div className="text-center lg:text-left">
                                <div className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                                    ৫০,০০০+
                                </div>
                                <div className="text-[11px] sm:text-xs md:text-sm text-muted mt-1">
                                    সক্রিয় শিক্ষার্থী
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                                    ২০০+
                                </div>
                                <div className="text-[11px] sm:text-xs md:text-sm text-muted mt-1">
                                    কোর্স
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                                    ৯৫%
                                </div>
                                <div className="text-[11px] sm:text-xs md:text-sm text-muted mt-1">
                                    সফলতার হার
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground flex items-center justify-center lg:justify-start gap-1.5">
                                    ৪.৯
                                    <FaStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                                </div>
                                <div className="text-[11px] sm:text-xs md:text-sm text-muted mt-1">
                                    গড় রেটিং
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4 sm:pt-5 text-[11px] sm:text-xs md:text-sm font-medium text-foreground">
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                                <FaAward className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                                <span>সার্টিফিকেট স্বীকৃত</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                                <FaInfinity className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                                <span>লাইফটাইম অ্যাক্সেস</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                                <FaUndo className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                                <span>৩০ দিনের রিফান্ড</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                                <FaHeadphones className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                                <span>২৪/৭ সাপোর্ট</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 sm:gap-2 col-span-2 sm:col-span-1">
                                <FaMobileAlt className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                                <span>মোবাইল অ্যাপ</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:col-span-6 w-full flex justify-center items-center order-1 lg:order-2">
                        <img
                            src="https://i.ibb.co.com/21THzmK7/Captufjfgjre-removebg-preview.png"
                            alt="Academy Intro"
                            className="w-full max-w-70 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto max-h-[40vh] sm:max-h-[50vh] lg:max-h-[75vh] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
