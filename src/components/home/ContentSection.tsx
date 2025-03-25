import React from 'react'
import Link from 'next/link'
import { BiSend } from 'react-icons/bi'

const ContentSection = () => {
  return (
    <section className='w-full min-h-screen flex justify-center items-center py-24'>
      <div className='max-w-5xl w-full px-4 md:px-16 space-y-12'>
        <div className='space-y-8 text-lg text-gray-800'>
          <p>
            Livet er i bevegelse. Noen ganger føles det lett og flytende – andre ganger kan det kjennes fastlåst, 
            utfordrende eller uoversiktlig. Kanskje står du i noe som er vanskelig, kanskje kjenner du på et 
            ønske om endring, eller kanskje trenger du bare et rom der du kan sortere tankene dine sammen med 
            noen som virkelig lytter.
          </p>

          <p>
            Fra sommeren 2025 starter jeg opp timer som gestaltterapeut under utdanning ved NGI 
            (Norsk Gestaltinstitutt). Jeg tilbyr samtaleterapi og veiledning til enkeltpersoner– 
            til en redusert pris på 450 kr per time mens jeg fullfører min utdanning frem mot våren 2027.
          </p>

          <p>
            Gestaltterapi handler om å bli mer bevisst på seg selv – her og nå. Det handler om å få lov til 
            å ta plass, kjenne etter, sette ord på det som er. For når vi ser oss selv klarere, åpner vi 
            også for nye muligheter.
          </p>

          <p>
            Som terapeut møter jeg deg med nærvær, varme og et ekte engasjement. Jeg tror på at vi mennesker 
            er en helhet – hode, kropp og følelser henger sammen – og at virkelig endring skjer når vi rommer 
            oss selv akkurat slik vi er.
          </p>

          <blockquote className='border-l-4 border-[#d1c5c5] pl-6 py-2 italic'>
            "Det er først når vi blir den vi er, at endring kan skje."
            <footer className='mt-2 text-sm'>– Arnold Beisser</footer>
          </blockquote>

          <p>
            Ingen problemstillinger er for store eller små. Du trenger ingen henvisning, og alt vi snakker 
            om er underlagt taushetsplikten.
          </p>

          <div className='space-y-4'>
            <p>Er du nysgjerrig?</p>
            <Link 
              href="/kontakt"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#171717]/90 transition-colors"
            >
              <BiSend className="text-lg" />
              Ta kontakt
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection