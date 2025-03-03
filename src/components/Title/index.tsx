import React from 'react';
import s from './styles.module.css';
import GradientText, { GradientTextProps } from '../GradientText';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type SectionWrapperProps = {
  children?: React.ReactNode;
  className?: string;
  type?: 'main' | 'secondary';
};

type SentenceProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'h1' | 'h2';
};

type TitleProps = {
  title?: string;
  className?: string;
};

type SubTitleProps = {
  title?: string;
  className?: string;
  color?: 'accent' | 'primary';
};

type GradientProps = {
  title: string;
} & GradientTextProps;

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  type = 'secondary',
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-20%' }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, amount: 0.5 }}
      viewport={{ once: true }}
      className={clsx(s.sectionWrapper, s[type], className)}
    >
      {children}
    </motion.div>
  );
};

const Sentence: React.FC<SentenceProps> = ({ children, size, className }) => {
  return (
    <span className={clsx(s.sentence, size && s[size], className)}>
      {children}
    </span>
  );
};

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return <span className={clsx(s.title, className)}>{title}</span>;
};

const SubTitle: React.FC<SubTitleProps> = ({
  title,
  className,
  color = 'accent',
}) => {
  return <span className={clsx(s.subTitle, s[color], className)}>{title}</span>;
};

const Gradient: React.FC<GradientProps> = ({ title, ...rest }) => {
  return <GradientText text={title} {...rest} />;
};

const CompoundTitle = {
  Title: Title,
  SubTitle: SubTitle,
  Gradient: Gradient,
  SectionWrapper: SectionWrapper,
  Sentence: Sentence,
};

export default CompoundTitle;
