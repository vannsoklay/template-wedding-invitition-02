import { AnimatedFrameDetail } from "./frames/FrameDetail"

export default function DetailSection() {
  return (
    <>
      <div className="absolute mb:-top-60 -top-56 -left-38 transform z-40 w-[680px]">
        <AnimatedFrameDetail className="w-full h-96 text-amber-400 z-40" directions="left" />
      </div>

      {/* Main content */}
      <div className="mb:space-y-8 2mb:space-y-4 text-center relative z-40 mt-32 mb-8">
        <div>
          <h1 className="text-2xl animate-slide-down z-50 2mb:text-2xl mb:text-xl">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h1>
        </div>

        {/* ឈ្មោះរបស់គ្រួសារ */}
        <div className="grid grid-cols-2">
          <div className="space-y-2">
            <p className="text-lg">លោក តាន់ ណាន</p>
            <p className="text-lg opacity-90">អ្នកស្រី ថុង ស្រីម</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg">លោក ចាន់ សុខ</p>
            <p className="text-lg opacity-90">អ្នកស្រី ស្រេង កញ្ញា</p>
          </div>
        </div>

        <div>
          មានកិត្តិយស សូមអញ្ជើញលោកលោកស្រី​ <br></br>
          ទៅចូលរួមក្នុងពិធីមង្គលការ
        </div>

        {/* ឈ្មោះកូនក្រមំុកំលោះ */}
        <div className="grid grid-cols-3">
          <div>
            <p className="md:text-lg text-sm opacity-90">កូនស្រីនាម ថុង ស្រីម</p>
          </div>
          <div className="md:text-lg text-sm">ជាគូនិង</div>
          <div>
            <p className="md:text-lg text-sm">កូនស្រី ចាន់ សុខ</p>
          </div>
        </div>

        {/* Invitation Text */}
        <div className="space-y-4 mt-8 px-4">
          <p className="text-lg font-medium">
            កំណត់មង្គលការនឹងប្រារព្ធនៅ​​<br></br>
            <label className="lg:text-md text-sm">ថ្ងៃ ១៤កើត ខែ មិគសិរ ឆ្នាំ រោង ឆស័ក ព.ស ២៥៦៨</label><br></br>
            ត្រូវនឹង<br></br>
            ថ្ងៃ សៅរ៍ ទី ១៤ ខែ ធ្នូ ឆ្នាំ ២០២៤
          </p>
          <div className="text-base opacity-90 leading-relaxed">
            <p>
              ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក-លោកស្រី អ្នកនាងកញ្ញាព្រមទាំងញ្ញាតិមិត្តទាំងអស់ទៅជាអធិបតីប្រសិទ្ធិពរជ័យសិរីមង្គលការក្នុងពិធីភោជនាហារជូនជាកិត្តិយសដល់គូស្វាមី​ ភរិយាថ្មីនៅម៉ោង ៥​ ល្ងាចរហូតម៉ោង១១យប់នៅ
              <br></br>
              ភោជនីដ្នាន
            </p>
          </div>
        </div>
      </div>


      {/* <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-4 h-6 border-2 border-black rounded-full relative">
            <div className="absolute top-2 left-1/2 w-1 h-2 bg-black rounded-full transform -translate-x-1/2 animate-bounce" />
          </div>
        </div>
      </div> */}
    </>
  )
}

