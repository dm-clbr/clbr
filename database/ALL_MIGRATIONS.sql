-- ============================================
-- CLBR PLATFORM - COMPLETE DATABASE SETUP
-- ============================================
-- Run this entire file in Supabase SQL Editor
-- This will create all tables, indexes, policies, and seed data
-- ============================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto; -- for gen_random_uuid

-- ============================================
-- MIGRATION 1: CMS CONTENT & REVIEWS
-- ============================================

-- CMS Content Management Table
CREATE TABLE cms_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key TEXT UNIQUE NOT NULL,
  content JSONB NOT NULL,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default content for each section
INSERT INTO cms_content (section_key, content) VALUES 
('hero', '{
  "welcome_text": "WELCOME",
  "main_heading": "Your Career, Your Pace",
  "sub_heading": "Your CLBR.",
  "description": "Join the fastest-growing sales team in the country. Earn more, travel more, live more.",
  "cta_primary": "JOIN CLBR",
  "cta_secondary": "LOGIN",
  "background_video": "/videos/aveyoWEB1a.mp4",
  "copyright": "© 2025 CLBR"
}'),

('inside_blocks', '{
  "blocks": [
    {
      "id": "001",
      "title": "The Culture",
      "description": "We keep it real. We celebrate wins, push each other to be better, and never forget to have fun along the way.",
      "background_image": "/images/unlmtd.png"
    },
    {
      "id": "002", 
      "title": "The Training",
      "description": "From day one, you will get hands-on training that actually works. No fluff, just real skills that help you close deals and build lasting relationships.",
      "background_image": "/images/presentation.png"
    },
    {
      "id": "003",
      "title": "The Lifestyle", 
      "description": "Work hard, live well. Flexible schedules, remote options, and the freedom to design your career around the life you want to live.",
      "background_image": "/images/WEBSITE PHOTO.png"
    },
    {
      "id": "004",
      "title": "The Growth",
      "description": "Your potential is unlimited here. Clear advancement paths, mentorship programs, and opportunities to lead from day one.",
      "background_image": "/images/growth.png"
    }
  ],
  "section_title": "On The Inside",
  "section_number": "(4)",
  "cta_button": "APPLY NOW"
}'),

('sales', '{
  "section_number": "(3)",
  "section_title": "Sales.",
  "main_heading": "Not Your Average Sales Gig.",
  "description": "UNLIMITED POTENTIAL. PROVEN METHODS. MASSIVE EARNINGS. REAL FREEDOM. AND A CULTURE THAT CARES. HERE, YOUR HARD WORK SPEAKS FOR ITSELF.",
  "copyright": "© 2025 CLBR",
  "background_logo": "/aveyoSalesLogo.svg",
  "grid": {
    "large_image": {
      "url": "/images/donny-hammond.jpeg",
      "alt": "Sales representative"
    },
    "text_block": {
      "title": "A COMPLETELY KITTED TOOL KIT.",
      "content": "No limits, just wins. From your first deal to your biggest bonus, we set you up with the tools, training, and support you need to crush goals and climb fast. When you win, the whole team wins—and we celebrate every step of the way."
    },
    "button": {
      "text": "JOIN THE TEAM",
      "variant": "primary"
    },
    "stat_card_1": {
      "value": "540",
      "title": "Milestones Achieved",
      "description": "Career milestones achieved by CLBR reps last year"
    },
    "stat_card_2": {
      "value": "850",
      "prefix": "$",
      "suffix": "K",
      "title": "Total Earned",
      "description": "By our reps in commissions and bonuses"
    },
    "bottom_image": {
      "url": "/images/Alpha Aveyo-4.jpeg",
      "alt": "Team photo"
    }
  }
}'),

('home_stats', '{
  "stats": [
    {
      "id": "1",
      "title": "Increase",
      "value": "10",
      "prefix": "",
      "suffix": "%",
      "description": "Monthly growth in sales performance",
      "icon": "📈",
      "order": 1
    },
    {
      "id": "2",
      "title": "Projects Sold",
      "value": "45",
      "prefix": "",
      "suffix": "",
      "description": "Successful projects completed this month",
      "icon": "🏠",
      "order": 2
    },
    {
      "id": "3",
      "title": "Revenue Generated",
      "value": "850",
      "prefix": "$",
      "suffix": "K",
      "description": "Total revenue generated this quarter",
      "icon": "💰",
      "order": 3
    },
    {
      "id": "4",
      "title": "Customer Satisfaction",
      "value": "98",
      "prefix": "",
      "suffix": "%",
      "description": "Based on customer reviews and feedback",
      "icon": "⭐",
      "order": 4
    }
  ]
}');

-- Create indexes for CMS content
CREATE INDEX idx_cms_content_section_key ON cms_content(section_key);
CREATE INDEX idx_cms_content_published ON cms_content(is_published);

-- Enable Row Level Security for CMS
ALTER TABLE cms_content ENABLE ROW LEVEL SECURITY;

-- CMS policies
CREATE POLICY "Enable all operations for authenticated users" ON cms_content
  FOR ALL USING (true);

-- Reviews Table for Video Reviews Management
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  type TEXT CHECK (type IN ('customer', 'rep')) NOT NULL DEFAULT 'customer',
  featured BOOLEAN DEFAULT false,
  customer_name TEXT,
  rep_name TEXT,
  location TEXT NOT NULL,
  date_recorded DATE NOT NULL DEFAULT CURRENT_DATE,
  status TEXT CHECK (status IN ('active', 'inactive', 'pending')) NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for reviews table
CREATE INDEX idx_reviews_type ON reviews(type);
CREATE INDEX idx_reviews_status ON reviews(status);
CREATE INDEX idx_reviews_featured ON reviews(featured);
CREATE INDEX idx_reviews_date ON reviews(date_recorded);

-- Enable Row Level Security for reviews
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Reviews policies
CREATE POLICY "Enable all operations for authenticated users on reviews" ON reviews
  FOR ALL USING (true);

-- Insert sample reviews data
INSERT INTO reviews (title, description, video_url, thumbnail_url, type, featured, customer_name, rep_name, location, date_recorded, status) VALUES 
('Amazing Solar Installation Experience', 'Customer shares their positive experience with CLBR solar installation', '/videos/customer-review-1.mp4', '/images/customer-review-1-thumb.jpg', 'customer', true, 'John Smith', null, 'Austin, TX', '2024-12-15', 'active'),
('Top Rep Performance Review', 'Sales rep discusses their success strategies', '/videos/rep-review-1.mp4', '/images/rep-review-1-thumb.jpg', 'rep', true, null, 'Austin Townsend', 'Dallas, TX', '2024-12-10', 'active'),
('Family Loves Their Solar System', 'Happy family testimonial about their solar savings', '/videos/customer-review-2.mp4', '/images/customer-review-2-thumb.jpg', 'customer', false, 'Sarah Johnson', null, 'Houston, TX', '2024-12-08', 'active'),
('Rep Training Success Story', 'New rep shares their training experience', '/videos/rep-review-2.mp4', '/images/rep-review-2-thumb.jpg', 'rep', false, null, 'Sawyer Kieffer', 'San Antonio, TX', '2024-12-05', 'active');

-- ============================================
-- MIGRATION 2: PROJECT LOCATIONS (for Maps)
-- ============================================

-- Cache table for geocoded project addresses
CREATE TABLE IF NOT EXISTS project_locations (
  project_id UUID NOT NULL,
  address_hash TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (project_id, address_hash)
);

-- Indexes for spatial queries
CREATE INDEX IF NOT EXISTS project_locations_lat_idx ON project_locations (lat);
CREATE INDEX IF NOT EXISTS project_locations_lng_idx ON project_locations (lng);

-- ============================================
-- MIGRATION 3: GEOCODE JOBS
-- ============================================

-- Job queue for geocoding
CREATE TABLE IF NOT EXISTS geocode_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL,
  address TEXT NOT NULL,
  status TEXT NOT NULL,
  attempts INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  processed_at TIMESTAMPTZ,
  last_error TEXT
);

CREATE INDEX IF NOT EXISTS geocode_jobs_project_id_idx ON geocode_jobs (project_id);
CREATE INDEX IF NOT EXISTS geocode_jobs_processed_idx ON geocode_jobs (processed_at);

-- Helper functions for geocoding
CREATE OR REPLACE FUNCTION compute_is_pto(p_status TEXT)
RETURNS BOOLEAN LANGUAGE SQL IMMUTABLE AS $$
  SELECT LOWER(COALESCE(p_status,'')) IN ('complete','active');
$$;

CREATE OR REPLACE FUNCTION url_encode_basic(p TEXT)
RETURNS TEXT LANGUAGE SQL IMMUTABLE AS $$
  SELECT REPLACE(REPLACE(REPLACE(COALESCE(p,''),' ','%20'), '#', '%23'), ',', '%2C');
$$;

-- ============================================
-- MIGRATION 4: EDUCATION PLATFORM
-- ============================================

-- Courses Table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  slug TEXT UNIQUE NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Regions Table (for managing regional variations)
CREATE TABLE regions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Lessons Table
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  duration_minutes INTEGER,
  region TEXT NOT NULL DEFAULT 'california',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Lesson Progress Table
CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Lesson Notes Table
CREATE TABLE lesson_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for education tables
CREATE INDEX idx_courses_slug ON courses(slug);
CREATE INDEX idx_courses_sort_order ON courses(sort_order);
CREATE INDEX idx_lessons_course_id ON lessons(course_id);
CREATE INDEX idx_lessons_region ON lessons(region);
CREATE INDEX idx_lessons_sort_order ON lessons(sort_order);
CREATE INDEX idx_lesson_progress_user_id ON lesson_progress(user_id);
CREATE INDEX idx_lesson_progress_lesson_id ON lesson_progress(lesson_id);
CREATE INDEX idx_lesson_notes_user_id ON lesson_notes(user_id);
CREATE INDEX idx_lesson_notes_lesson_id ON lesson_notes(lesson_id);

-- Enable Row Level Security for education tables
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE regions ENABLE ROW LEVEL SECURITY;

-- Courses policies
CREATE POLICY "Anyone can view published courses" ON courses
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can do anything with courses" ON courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Lessons policies
CREATE POLICY "Anyone can view published lessons" ON lessons
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can do anything with lessons" ON lessons
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Lesson Progress policies
CREATE POLICY "Users can view their own progress" ON lesson_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" ON lesson_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" ON lesson_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Lesson Notes policies
CREATE POLICY "Users can view their own notes" ON lesson_notes
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own notes" ON lesson_notes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own notes" ON lesson_notes
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own notes" ON lesson_notes
  FOR DELETE USING (auth.uid() = user_id);

-- Regions policies
CREATE POLICY "Anyone can view active regions" ON regions
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can do anything with regions" ON regions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Insert initial regions
INSERT INTO regions (name, slug, sort_order) VALUES 
  ('California', 'california', 1),
  ('Illinois', 'illinois', 2);

-- Insert initial courses
INSERT INTO courses (title, description, slug, sort_order) VALUES
  ('Closer', 'Master the art of closing solar deals. Learn proven techniques and strategies to convert prospects into customers.', 'closer', 1),
  ('Setter', 'Learn how to set appointments and qualify leads effectively. Build the foundation for successful solar sales.', 'setter', 2);

-- ============================================
-- MIGRATION 5: INCENTIVES
-- ============================================

CREATE TABLE incentives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  background_image_url TEXT NOT NULL,
  background_video_url TEXT,
  live_status TEXT CHECK (live_status IN ('coming_up', 'live', 'done')) NOT NULL DEFAULT 'coming_up',
  category TEXT NOT NULL,
  category_color TEXT NOT NULL DEFAULT '#3B82F6',
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for incentives
CREATE INDEX idx_incentives_live_status ON incentives(live_status);
CREATE INDEX idx_incentives_published ON incentives(is_published);
CREATE INDEX idx_incentives_dates ON incentives(start_date, end_date);

-- Enable Row Level Security for incentives
ALTER TABLE incentives ENABLE ROW LEVEL SECURITY;

-- Incentives policies
CREATE POLICY "Anyone can view published incentives" ON incentives
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can do anything with incentives" ON incentives
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_user_meta_data->>'role' = 'admin'
    )
  );

-- ============================================
-- SETUP COMPLETE!
-- ============================================
-- All tables, indexes, policies, and seed data have been created
-- Next steps:
-- 1. Create storage buckets: 'images' and 'videos'
-- 2. Create admin user and set role metadata
-- 3. Configure environment variables in your app
-- ============================================
