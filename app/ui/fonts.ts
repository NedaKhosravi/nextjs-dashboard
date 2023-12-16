import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana  = Lusitana(
    {
        weight: ['400', '700'], // normal and bold
        style: 'normal', // default value
        subsets: ['latin'], // optional, for preloading
      }
)