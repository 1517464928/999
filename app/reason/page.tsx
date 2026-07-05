"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReasonPage() {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/about/");
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent px-6 py-24">
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-8"
        >
          为什么我想从运营转到新能源汽车销售岗
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base md:text-lg text-[#1a1a1a]/75 leading-relaxed text-left md:text-justify space-y-5"
        >
          <p>
            我之所以选择从运营转向销售岗位，核心出于三点考虑：
          </p>
          <p>
            第一是看好新能源行业的长期价值。新能源汽车是未来出行的必然趋势，也是真正推动绿色可持续发展的赛道，我希望自己的职业能扎根在一个有增长空间、有社会意义的领域，这是我选择方向的大前提。
          </p>
          <p>
            第二是发自内心认可特斯拉的产品与企业文化。特斯拉不仅用技术重新定义了汽车，更用直营模式重塑了用户购车体验，不是靠传统推销，而是靠专业的产品传递和真诚的用户服务传递品牌理念，这种以用户为中心、做长期价值的做事方式，和我自己的职业理念高度契合，也是我非常向往的平台。
          </p>
          <p>
            第三也是最核心的原因，是我确认自己真正热爱销售工作。最开始选择运营岗，其实是我主动规划的职业探索阶段，我想先全面接触产品、运营、销售支持等不同模块，把业务底层能力打扎实。但在实习过程中我发现，自己投入度最高、最有成就感的，始终是直面需求、沟通协调、推动落地、拿到明确业务结果的环节，我对公司内销售团队的工作的兴趣才是最大的；我又想起之前在家教社群的销售对接经历，我全程负责从获客沟通、到促成成交、提供后续服务的全链路工作，这段经历更让我确定：我更喜欢站在业务一线，通过真诚沟通挖掘客户真实需求，用合适的方案匹配需求，最终实现双方共赢的工作状态。
          </p>
          <p>
            运营积累的服务意识、问题解决能力和流程化思维，都会成为我做销售的加分项；而现在我希望顺着自己的热爱，正式转向销售岗位长期深耕，也希望能在特斯拉这个平台把这件事做好。
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(249,115,22,0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplore}
          className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-full text-base font-medium hover:bg-[#ea580c] transition-colors duration-300 cursor-pointer shadow-lg"
        >
          GO <ChevronDown size={18} />
        </motion.button>
      </div>
    </main>
  );
}
