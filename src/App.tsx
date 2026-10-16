import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CourseView } from './components/CourseView';
import { QuizPage } from './pages/QuizPage';
import { AuthPage } from './pages/AuthPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminPage } from './pages/AdminPage';
import { ShieldCheck } from 'lucide-react';
import { pythonData, architectureData, javaData, cData, webData, bddData } from './data';

function App() {
  return (
    <BrowserRouter basename="/Projet-sites-cours">
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/python"
                element={
                  <CourseView
                    title="Python Cheat Sheet"
                    description="Bases, Structures, POO, et Data Science avec Python."
                    data={pythonData}
                    language="python"
                  />
                }
              />

              <Route
                path="/architecture"
                element={
                  <CourseView
                    title="Architecture & Modélisation"
                    description="Diagrammes UML, Modèles C4 et concepts architecturaux."
                    data={architectureData}
                  />
                }
              />

              <Route
                path="/java"
                element={
                  <CourseView
                    title="Java & POO"
                    description="Classes, Objets, Encapsulation et méthodes usuelles."
                    data={javaData}
                    language="java"
                  />
                }
              />

              <Route
                path="/c"
                element={
                  <CourseView
                    title="Langage C & Systèmes"
                    description="Compilation, mémoire dynamique, pointeurs, tableaux et structures en C."
                    data={cData}
                    language="c"
                  />
                }
              />

              <Route
                path="/web"
                element={
                  <CourseView
                    title="Développement Web (HTML, CSS, JS, PHP)"
                    description="DOM, balises sémantiques, styles & responsive, événements JS, backend PHP et PDO."
                    data={webData}
                    language="html"
                  />
                }
              />

              <Route
                path="/bdd"
                element={
                  <CourseView
                    title="Bases de Données & SQL"
                    description="MERISE (MCD, MLD, MPD), Normalisation (1FN, 2FN, 3FN), SQL LDD, LMD, DQL et requêtes avancées."
                    data={bddData}
                    language="sql"
                  />
                }
              />

              <Route path="/qcm" element={<QuizPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/login" element={<Navigate to="/auth" replace />} />
              <Route path="/register" element={<Navigate to="/auth?mode=register" replace />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/admin" element={<AdminPage />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <footer className="mt-auto border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-semibold text-gray-900">DevSheets Pro</div>
              <div>Plateforme de révision interactive & sécurisée.</div>
              <Link
                to="/admin"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-indigo-600 transition-colors font-medium"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                <span>Espace Admin</span>
              </Link>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
