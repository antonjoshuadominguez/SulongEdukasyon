import { useState, ReactNode } from "react";
import { Link } from "wouter";
import { 
  Gamepad2, 
  BookText, 
  Users, 
  ChevronRight, 
  School, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

// Simple landing page layout
const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">SulongEdukasyon</span>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
              <a href="#games" className="text-gray-600 hover:text-primary">Games</a>
              <a href="#team" className="text-gray-600 hover:text-primary">Team</a>
              <Button asChild size="sm">
                <Link to="/auth">Sign in</Link>
              </Button>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Gamepad2 className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-neutral-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-xl font-bold mb-4">SulongEdukasyon</h3>
              <p className="text-white/70 mb-4">
                An educational gaming platform for Grade 6 Araling Panlipunan students.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Home</a></li>
                <li><a href="#features" className="text-white/70 hover:text-white">Features</a></li>
                <li><a href="#games" className="text-white/70 hover:text-white">Games</a></li>
                <li><a href="#team" className="text-white/70 hover:text-white">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
            <p>© {new Date().getFullYear()} SulongEdukasyon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function LandingPage() {
  const { translate } = useLanguage();
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null);

  const features = [
    {
      title: "Interactive Learning Games",
      description: "Learn through engaging educational games designed specifically for Grade 6 Araling Panlipunan students.",
      icon: <Gamepad2 className="h-6 w-6" />,
    },
    {
      title: "Various Game Types",
      description: "Choose from different game types like Picture Puzzle, Arrange Timeline, True or False, and more!",
      icon: <BookText className="h-6 w-6" />,
    },
    {
      title: "Student Collaboration",
      description: "Collaborate with your classmates in interactive games for a more enjoyable learning experience.",
      icon: <Users className="h-6 w-6" />,
    }
  ];

  const gameTypes = [
    "Picture Puzzle",
    "Picture Matching",
    "True or False",
    "Explain Image",
    "Fill in the Blanks",
    "Arrange Timeline",
    "Tama ang Ayos"
  ];
  
  const teamMembers = [
    {
      name: "Name 1",
      position: "Developer",
      description: "The lead developer of SulongEdukasyon, responsible for building the backend system and database architecture. Has 5 years of experience in web development, specializing in educational technology."
    },
    {
      name: "Name 2",
      position: "UI/UX Designer",
      description: "The interface designer of SulongEdukasyon, working to ensure the platform is user-friendly for elementary students. Was an art teacher before becoming a full-time designer."
    },
    {
      name: "Name 3",
      position: "Curriculum Specialist",
      description: "Collaborated with teachers to align SulongEdukasyon content with the K-12 curriculum. A former Araling Panlipunan teacher with 10 years of experience teaching in elementary school."
    },
    {
      name: "Name 4",
      position: "Game Developer",
      description: "Designed and developed the educational games on the platform. Has a background in game development and teaching, giving them a unique perspective on creating engaging educational games."
    },
    {
      name: "Name 5",
      position: "Project Manager",
      description: "Manages the overall direction and implementation of SulongEdukasyon. Their leadership helped make the project successful from concept to deployment."
    }
  ];

  return (
    <LandingLayout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                SulongEdukasyon: Learn While Playing
              </h1>
              <p className="text-xl text-white/80 mb-8">
                An interactive platform for Grade 6 Araling Panlipunan students featuring various games for better learning.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/auth">Get Started</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h2 className="text-2xl text-white font-bold mb-4">Educational Games for Grade 6</h2>
                <ul className="space-y-2 text-white/90">
                  {gameTypes.map((game, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="h-5 w-5 mr-2 text-white/70" />
                      {game}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key features of SulongEdukasyon that help make learning more engaging and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section id="games" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Games
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              SulongEdukasyon offers a variety of games designed to enhance learning about Philippine history and culture.
            </p>
            
            <div className="inline-flex flex-wrap justify-center gap-3 mx-auto mb-8">
              {gameTypes.map((game, index) => (
                <span key={index} className="py-2 px-4 bg-white rounded-full border border-gray-200 text-gray-800 shadow-sm">
                  {game}
                </span>
              ))}
            </div>
            
            <Button asChild size="lg" className="mt-4">
              <Link to="/auth">Sign in to Play <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section with Interactive Profiles */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate developers and educators who created SulongEdukasyon.
            </p>
          </div>
          
          {/* Team member avatars */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`text-center cursor-pointer transition-all ${selectedTeamMember === index ? 'scale-105' : 'hover:scale-105'}`}
                onClick={() => setSelectedTeamMember(index === selectedTeamMember ? null : index)}
              >
                <div className={`w-28 h-28 md:w-36 md:h-36 mx-auto mb-3 rounded-full overflow-hidden border-4 ${selectedTeamMember === index ? 'border-primary' : 'border-gray-200 hover:border-primary/50'}`}>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Users className={`h-14 w-14 ${selectedTeamMember === index ? 'text-primary/70' : 'text-gray-400'}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                
                {/* Display triangle pointer for selected member */}
                {selectedTeamMember === index && (
                  <div className="w-0 h-0 mx-auto mt-2 border-l-[10px] border-l-transparent border-t-[10px] border-t-primary border-r-[10px] border-r-transparent"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Team description block (below avatars) */}
          {selectedTeamMember === null ? (
            <div className="bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Our Team</h3>
              <p className="text-gray-600">
                We are the team behind SulongEdukasyon, a group of dedicated professionals who came together to create a platform that provides an interactive and engaging way of learning Araling Panlipunan for Grade 6 students. Our team consists of developers, designers, and educators with a single goal: to make learning more fun and meaningful.
              </p>
            </div>
          ) : (
            <div className={`bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto border-l-4 border-primary`}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{teamMembers[selectedTeamMember].name}</h3>
              <p className="text-primary font-medium mb-3">{teamMembers[selectedTeamMember].position}</p>
              <p className="text-gray-600">{teamMembers[selectedTeamMember].description}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Join SulongEdukasyon to begin your journey to more engaging and effective learning of Araling Panlipunan.
          </p>
          <Button asChild size="lg" className="px-6">
            <Link to="/auth">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </LandingLayout>
  );
}