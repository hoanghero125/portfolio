import Image from "next/image"

export const AboutWindow = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
  <div className="w-80 h-80 bg-white border-2 border-gray-400 shadow-[inset_-1px_-1px_0px_gray,inset_1px_1px_0px_white] flex items-center justify-center">
    <Image
      src="/img/avatar/me.jpg" 
      alt="Your Photo"
      width={300} 
      height={300}
      className="rounded object-cover"
      priority
    />
  </div>
</div>
      {/* About Content */}
      <div className="flex-1 space-y-4">
        <div className="bg-white border border-gray-400 shadow-[inset_-1px_-1px_0px_gray,inset_1px_1px_0px_white] p-4">
          <p className="text-black font-mono text-sm leading-relaxed">
            {"> Initializing developer profile..."}
            <br/>
            <br/>
            <i>
              Hello there! I&apos;m <b>Đỗ Phạm Bảo Hoàng</b>, also known as <b>Dek</b>. I&apos;m a 19-year-old <b>Computer Hobbyist</b> from <b>Vietnam</b>.
            </i>
            <br/> 
            ...
            <br/>
             I am currently pursuing a <b>Bachelor&apos;s degree</b> in <b>Information Technology</b> at the <b>Posts and Telecommunications Institute of Technology (PTIT)</b>, expected to graduate in <b>2029</b>. Previously, I worked as a <b>web developer</b> at <b>Vietcode</b>, specializing in <b>UX/UI design</b> and <b>frontend development</b>, and I now serve as the <b>lead web developer</b> for <b>MeMon Designer</b>. Recently, I have stepped into the field of <b>artificial intelligence</b> as a <b>Junior AI Researcher</b> at <b>PTIT.AI Lab</b>, focusing on <b>computer vision</b> and <b>deep learning</b>. I also gained practical experience as a <b>Data Scientist intern</b> at <b>VNPT Cyber Immunity</b>, contributing to <b>feature engineering</b> and <b>model optimization</b> for <b>malware classification</b>.
          </p>
        </div>

        <div className="bg-white border border-gray-400 shadow-[inset_-1px_-1px_0px_gray,inset_1px_1px_0px_white] p-4">
          <p className="text-black font-mono text-sm">
            {"> Current focus areas:"}
            <br/>
            {"  - Full Stack Web Development"}
            <br/>
            {"  - Artificial Intelligence"}
            <br/>
            {"  - Computer Vision"}
            <br/>
            {"  - Data Science"}
          </p>
        </div>
      </div>
    </div>
  </div>
)
