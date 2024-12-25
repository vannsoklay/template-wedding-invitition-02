'use client'

import { useState, useEffect, useRef } from 'react';
import { Textarea, Button, Avatar } from "@nextui-org/react";
import { motion, AnimatePresence } from 'framer-motion';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "សុខ ចាន់ដារ៉ា",
    content: "សូមប្រសិទ្ធិពរឲ្យពេលខាងមុខរបស់អ្នកទាំងពីរគ្របដណ្តប់ដោយសេចក្ដីស្រឡាញ់ និងសុភមង្គលជាអម!",
    timestamp: "2024-12-24T10:00:00Z",
    likes: 5,
  },
  {
    id: 2,
    author: "លី ម៉ាលីកា",
    content: "សូមអរគុណដែលបានចែករំលែកថ្ងៃដ៏ស្រស់ស្អាតនេះជាមួយយើង! សូមអបអរសាទរ!",
    timestamp: "2024-12-24T10:15:00Z",
    likes: 3,
  },
  {
    id: 3,
    author: "ជោត សោភា",
    content: "សប្បាយចិត្តណាស់ចំពោះអ្នកទាំងពីរ! អាពាហ៍ពិពាហ៍នេះពិតជាល្អឥតខ្ចោះ!",
    timestamp: "2024-12-24T10:30:00Z",
    likes: 7,
  },
  {
    id: 4,
    author: "ឈុន វាសនា",
    content: "សូមអោយការធ្វើដំណើររួមគ្នារបស់អ្នកទាំងពីរមានតែសេចក្ដីរីករាយ និងសំនាងល្អ!",
    timestamp: "2024-12-24T10:45:00Z",
    likes: 2,
  },
  {
    id: 5,
    author: "ពៅ ស្រីនាង",
    content: "សូមអបអរសាទរអាពាហ៍ពិពាហ៍របស់អ្នកទាំងពីរ! ថ្ងៃនេះពិតជាមិនអាចបំភ្លេចបានឡើយ!",
    timestamp: "2024-12-24T11:00:00Z",
    likes: 4,
  }
];

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([...initialComments]);
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const commentsPerLoad = 4; // Number of comments to load per scroll
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Load initial comments
  useEffect(() => {
    setVisibleComments(comments.slice(0, commentsPerLoad));
  }, [comments]);

  const loadMoreComments = () => {
    const currentLength = visibleComments.length;
    const nextComments = comments.slice(
      currentLength,
      currentLength + commentsPerLoad
    );

    setVisibleComments((prev) => [...prev, ...nextComments]);

    // Check if there are more comments to load
    if (currentLength + commentsPerLoad >= comments.length) {
      setHasMore(false);
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || !hasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;

    // Check if user scrolled near the bottom of the container
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      loadMoreComments();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setIsSubmitting(true);
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      const comment: Comment = {
        id: Date.now(),
        author: 'Guest',
        content: newComment.trim(),
        timestamp: new Date().toISOString(),
        likes: 0,
      };
      setComments((prevComments) => [...prevComments, comment]);
      setNewComment('');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto px-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 mt-32"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          បំណងប្រាថ្នានិងយោបល់
        </h2>
        <p className="text-gray-600">
          ចែករំលែកបំណងប្រាថ្នា និងគំនិតរបស់អ្នកទៅកាន់គូស្នេហ៍ទាំងពី
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder="ចែករំលែកបំណងប្រាថ្នា..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          minRows={3}
          variant="bordered"
          className="mb-4 bg-white rounded-2xl focus:border-amber-300 focus:bg-white transition-all duration-300"
        />
        <Button
          type="submit"
          color="primary"
          size="md"
          isLoading={isSubmitting}
        >
          ប្រកាសបំណង
        </Button>
      </form>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="space-y-6 h-[60vh] overflow-y-auto custom-scrollbar bg-gray-50 rounded-lg p-4"
      >
        <AnimatePresence>
          {visibleComments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-4 bg-white duration-300"
            >
              <div className="flex items-start space-x-4">
                <Avatar
                  name={comment.author}
                  size="md"
                  className="text-white"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-800">{comment.author}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(comment.timestamp).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-3">{comment.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!hasMore && (
          <p className="text-center text-gray-500 mt-4">
            All comments have been loaded.
          </p>
        )}
      </div>
    </div>
  );
}
