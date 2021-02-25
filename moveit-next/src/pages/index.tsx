import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />
      
      <section>
        <div className="">
          <Profile />
          <CompletedChallenges />
        </div>
        <div></div>
      </section>
    </div>
  )
}
